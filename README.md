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
Especially the first time this process will take some time, but eventually the 
invitation to visit http://localhost:1337 will pop up in your terminal
(visit http://localhost:1337/admin/ to go to the admin panel)

### Default username / password
To login to the Strapi backend use the following credentials:

Username: `admin@admin.com`

Password: `Admin123`

## Tables / strapi collections
Up for debate
- `quiz` A quiz (bag of questions)
- `quiz-question` A question part of the quiz
- `quiz-question-answer` Optional answers for questions (multiple choice options)
- `quiz-page (tussenpaginas)` A questionless content page somewhere in the quiz
- `game` A quiz in progress
- `game-player` A single player inside of a game

## Developer notes
`/data/data.db` is the location of the database for strapi. It is intentionally part of the github project

## Acknowledgments

* [strapi-v4 docker-compose yaml](https://github.com/seralaci/strapi-docker-v4)
