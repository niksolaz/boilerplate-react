FROM node:10.23.2
RUN yarn install
COPY . .
CMD ["parcel -p 3030 watch", "index.html"]