.PHONY: build

deploy:
	gcloud builds submit --tag gcr.io/cya-website/website
	gcloud beta run deploy --image gcr.io/cya-website/website --platform managed

build:
	yarn build

local-docker: build
	docker build . -t local_website
	docker run -p 3000:3000 -e PORT=3000 local_website

run:
	yarn start