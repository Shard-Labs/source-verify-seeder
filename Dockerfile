FROM node:10.16.0
WORKDIR /home/app/
COPY ./ ./
RUN npm install
RUN npm run build
COPY .env.docker .env
# RUN ls -al

# FROM node:10.15.1
# WORKDIR /home/app/
# COPY --from=0 /home/app/package.json ./package.json
# COPY --from=0 /home/app/dist/ dist/
CMD [ "npm", "run", "start"]
