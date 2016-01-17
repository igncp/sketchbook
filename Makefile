all: set-dev-diagrams server

install:
	@npm i
	@./node_modules/.bin/bower install
	@gem install compass
	@sudo pip install termcolor
	@echo "Done."

server:
	@echo 'Port 8081'
	@supervisor app.js

set-dev-diagrams:
	@rm -rf vendors/diagrams-collections
	@ln -s ../../diagrams-collections vendors/diagrams-collections

executables:
	@chmod -R +x ./scripts
	@echo "Done."

remove-dist:
	@rm -rf dist

watch: remove-dist
	@./node_modules/.bin/webpack -w

build: remove-dist
	@./node_modules/.bin/webpack