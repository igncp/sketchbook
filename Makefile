all: set-dev-diagrams server

server:
	@echo 'Port 8080'
	@supervisor app.js

set-dev-diagrams:
	@rm -rf vendors/diagrams-collections
	@ln -s ../../diagrams-collections vendors/diagrams-collections