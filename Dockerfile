FROM nginx:alpine
# Don't use conf.d default nginx configurations.
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx
COPY /build /usr/share/nginx/html
# Substitute the environment variables and generate the final config
CMD envsubst '${PORT}' < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'
