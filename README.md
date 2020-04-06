# express-typescript-template

Copy *example.env* to *.env* file and modify as needed.

# Docker-compose
Requirements:
* *Docker*
* *Docker-compose*

## Steps:
* `docker-compose up`
* Visit localhost:port
    * port matches one in *.env* file

# Regular method
Requirements:
* database such as *PostgreSQL* or *MySQL* or any other compatible with *TypeORM*
* *Node.js*
* *npm*

## Steps:
* Run your database and configure accordingly your *.env* file
* `npm install`
* `./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run`
* `npm run start`
* Visit localhost:port 
    * port matches one in *.env* file