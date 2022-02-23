# GraphQL-Example
My example GraphQL project for learning from <a href="https://www.youtube.com/watch?v=ed8SzALpx1Q">this</a> course and practising Docker.

<br>

## Deploying
1. Edit *example.env* file variables and save as *.envdev* or *.envprod* file.

<br>

2. Then deploy as docker with single command.

<br>

    docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up

for development or

    docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up

for production.
