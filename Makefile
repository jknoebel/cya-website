.PHONY: build

build:
	npm run build

local-docker: build
	docker build . -t local_website
	docker run -p 3000:3000 -e PORT=3000 --name local_website local_website

run:
	npm run dev

reload-nginx:
	docker kill -s HUP local_website

stop:
	docker stop local_website

destroy: stop
	docker rm local_website