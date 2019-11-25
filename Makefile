.PHONY: build

build:
	yarn build

deploy: build
	gcloud builds submit --tag gcr.io/cya-website/website
	gcloud beta run deploy website --image gcr.io/cya-website/website --platform managed

local-docker: build
	docker build . -t local_website
	docker run -p 3000:3000 -e PORT=3000 local_website

run:
	yarn start