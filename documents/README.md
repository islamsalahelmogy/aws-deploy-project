
# Link
    Server is currently running on http://udagramapibucket.s3-website-us-east-1.amazonaws.com
## Installation

### Frontend

- Run `npm run frontend:install`        to install the dependencies in `package.json` of the frontend
- Run `npm run frontend:build`          to build the project of the frontend
- Run `npm run frontend:start`          to host the frontend 
- Run `npm run frontend:test`           to test the frontend
- Run `npm run frontend:e2e`            to e2e the frontend
- Run `npm run frontend:lint`           to lint the frontend
- Run `npm run frontend:deploy`         to deploy the frontend in aws simple storage service

### backend

- Run `npm run backend:install`        to install the dependencies in `package.json` of the backend
- Run `npm run backend:build`          to build the project of the backend
- Run `npm run backend:start`          to host the backend 
- Run `npm run backend:deploy`         to deploy the backend in aws elastic beanstalk

### Script running for both

- Run `npm run deploy`                 to deploy both apps in aws

### Server Details
    SERVER HOST         : localhost (S3 Link)
    SERVER PORT         : 8080

### Database Details
    DB_HOST             : localhost (EB Link)
    DB_PORT             : 5432 (DEFAULT PORT)
    DB_NAME             : udagramdb_1
    DB_USERNAME         : postgres
    DB_PASSWORD         : postgres


## Project Infrastructure
- Services running in AWS
    - S3  (Simple Storage Service)
    - EB  (Elastic Beanstalk)
    - RDS (Relational Database Service)

- This project is using CircleCI pipeline

### Author
    Islam Salah Elmogy