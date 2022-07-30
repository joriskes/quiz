# Quiz

Pubquiz system using a strapi / mariadb backend and a custom react frontend  

## Getting Started

### Dependencies

* Docker
* Docker-compose

### Installing
Just run the docker image to start
```
git clone https://github.com/joriskes/quiz.git
cd quiz
docker-compose up
```
Especially the first time this process will take some time

## Backend
The backend is based upon Strapi (https://strapi.io/). 
The Strapi admin panel can be visited using http://localhost:1337/admin/

### Default username / password
To login to the Strapi backend use the following credentials:

Username: `admin@admin.com`

Password: `Admin123`

### Setup
Content-types:
- `Quiz` A quiz (bag of questions), a quiz can be played
- `Question` The base question part, not containing any specific question type values

Components:
- `Question-types` 
  - `QuestionMultipleChoice` multiple choice question type
  - `QuestionOpen` open question type

## Frontend
The frontend can be found here: http://localhost:3000

### Libraries
- React (https://reactjs.org/)
- Boilerplate using `create-react-app` (https://create-react-app.dev/) using typescript template
- ESLint + Prettier + eslint-config-prettier + airbnb defaults (and some minor changes)
- Material ui 5 (https://mui.com/)
- React-Query (https://tanstack.com/query/v4)

## Developer notes
`/data/data.db` is the location of the database for strapi. It is intentionally part of the github project
