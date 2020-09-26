.PHONY: build

build:
	yarn build

deploy: build
	gcloud builds submit --tag gcr.io/cya-website/website
	gcloud run deploy website --image gcr.io/cya-website/website --platform managed --region us-central1

local-docker: build
	docker build . -t local_website
	docker run -p 3000:3000 -e PORT=3000 --name local_website local_website

run:
	yarn start

reload-nginx:
	docker kill -s HUP local_website

stop:
	docker stop local_website

destroy: stop
	docker rm local_website