all: set-dev-diagrams server

install:
	@sudo npm install
	@./node_modules/.bin/bower install
	@gem install compass
	@echo "Done."

executables:
	@chmod -R +x ./scripts
	@echo "Done."

server:
	@echo 'Port 8080'
	@supervisor app.js

set-dev-diagrams:
	@rm -rf vendors/diagrams-collections
	@ln -s ../../diagrams-collections vendors/diagrams-collections

compass:
	@compass watch

tmux-all:
	@tmux split-window -h "make compass"
	@tmux split-window -h "make server"