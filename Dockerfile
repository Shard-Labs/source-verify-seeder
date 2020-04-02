FROM node:10.15.1
WORKDIR /home/app/
COPY / .
RUN mv docker-compose.env .env
RUN npm install
