all: server

server:
	@echo 'Port 8080'
	@supervisor app.js