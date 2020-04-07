# express-typescript-template

Copy *example.env* to *.env* file and modify as needed.

# Docker-compose
Requirements:
* *Docker*
* *Docker-compose*

## Steps:
* Copy *example.env* to *.env.docker* file and modify as needed.
* `./scripts/dev-compose.sh`
    * This is docker-compose up --build but it combines multiple .yaml files
* Visit localhost:port
    * port matches one in *.env* file
* This script can also receive argument `down` like this `./scripts/dev-compose.sh down`
    * This is `docker-compose down` with multiple .yaml files


# Regular method
Requirements:
* database such as *PostgreSQL* or *MySQL* or any other compatible with *TypeORM*
* *Node.js*
* *npm*

## Steps:
* Copy *example.env* to *.env* file and modify as needed.
* Run your database and configure accordingly your *.env* file
* `npm install`
* `./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run`
* `npm run start`
* Visit localhost:port 
    * port matches one in *.env* file