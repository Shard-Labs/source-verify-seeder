FROM node:10.15.1
WORKDIR /home/app/
COPY / .
RUN mv .env.docker .env
RUN npm install
CMD [ "npm", "run", "start" ]