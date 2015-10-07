all: set-dev-diagrams server

install:
	@sudo npm install
	@./node_modules/.bin/bower install
	@gem install compass
	@echo "Done."

server:
	@echo 'Port 8081'
	@supervisor app.js

set-dev-diagrams:
	@rm -rf vendors/diagrams-collections
	@ln -s ../../diagrams-collections vendors/diagrams-collections

compass:
	@compass watch

executables:
	@chmod -R +x ./scripts
	@echo "Done."