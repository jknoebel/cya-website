.ONESHELL:
deploy:
	cd website/
	gcloud app deploy

build:
	cd website/
	npm run build

run:
	cd website/
	npm start