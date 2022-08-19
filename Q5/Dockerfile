FROM node:alpine
WORKDIR /usr/src/publisher
COPY publisher.js /usr/src/publisher/
COPY data.json /usr/src/publisher/
RUN npm install mqtt
CMD [ "node", "publisher.js"]