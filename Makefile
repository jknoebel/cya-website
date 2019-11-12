deploy:
	gcloud builds submit --tag gcr.io/cya-website/website
	gcloud beta run deploy --image gcr.io/cya-website/website --platform managed

local:
	yarn build
	docker build . -t local_website
	docker run -p 3000:80 local_website