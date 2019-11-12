deploy:
	gcloud builds submit --tag gcr.io/cya-website/website
	gcloud beta run deploy --image gcr.io/cya-website/website --platform managed