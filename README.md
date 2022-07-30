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

#### Strapi backend:
Especially the first time this process will take some time, but eventually the
invitation to visit http://localhost:1337 will pop up in your terminal
(visit http://localhost:1337/admin/ to go to the admin panel)

#### React frontend:
The (create-react-app based) react frontend is started simultaneously with the strapi 
backend and can be found here: http://localhost:3000 after it's started

## Backend
- Clean Strapi (https://strapi.io/) install

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
- React (https://reactjs.org/)
- Boilerplate using `create-react-app` (https://create-react-app.dev/) using typescript template
- ESLint + Prettier + eslint-config-prettier + airbnb defaults (and some minor changes)
- Material ui 5 (https://mui.com/)
- React-Query (https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

## Developer notes
`/data/data.db` is the location of the database for strapi. It is intentionally part of the github project
