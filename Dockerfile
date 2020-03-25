FROM node:10.15.1
WORKDIR /home/app/
COPY / .
RUN npm install
