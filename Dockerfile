FROM nginx:alpine
COPY /build /usr/share/nginx/html
# Copy the nginx configuration template to the nginx config directory
COPY nginx/default.template /etc/nginx/conf.d/default.template
COPY nginx/gzip.conf /etc/nginx/conf.d/gzip.conf
# Substitute the environment variables and generate the final config
CMD envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'
