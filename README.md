# Employee API
#### Overview
Create an API using the serverless framework CLI.

#### Tasks
1. Create a REST API using the provided serverless skeleton that does the following:
- Create an employee via POST request to /employees
- Activate a single employee via PATCH request to /employees/{id}
- Deactivate a single employee via DELETE request to /employees/{id}
- Retrieve a collection of employees via GET request to /employees
2. Once complete, either push a fork of this project to your own repository and link it to us or zip up the git project and deliver it to us
electronically
3. Demonstrate API with interviewers

#### Prerequisites & Setup
1. Install Docker onto your machine
    - Note: ensure you have at least 4GB of memory allocated to the docker daemon process
2. Install latest (version 8) of NodeJS on your machine 
3. If you have Windows, use MinGW or Git for Windows bash to issue commands in this guide
4. Test the serverless skeleton project by issuing the following commands in your shell program:

```bash
npm run stack:up;
npm install;
npm start;
```
5. Test skeleton project locally by navigating to localhost:9999/hello

#### Constraints
1. Only support `application/json` content/media types -- I know, not very RESTful

#### Notes/Hints
1. `./scripts/docker-compose.yml`:
This defines your stack. Observe the port mappings.
MySQL will be listening on localhost:3336 instead of its standard port 3306
2. `./scripts/docker-entrypoint-initdb.d/mysql/0_schema.sql`:
This SQL file is here to help you define a table ahead of time. The script will be mounted inside
the container on its initialization. In order to change the schema using only this file, you
will need to run `npm run stack:down && npm run stack:up` for SQL file changes to be registered.
This will also wipe out any data you have on the container.
3. If you like debugging things, the debug port is 9229
4. Serverless configuration is found in `serverless.yml` and is a guide on how you can build environment
variables and other functions into your solution. See [serverless.com](https://serverless.com) for more information
6. Use whatever npm library you want to connect to your data sources. We recommend (`knex` + `mysql2` driver) packages for MySQL.

#### Optional
1. Make the list view paginated.
2. Sort based on the fields in the table.

#### Cleanup
```bash
npm run stack:down;
```
