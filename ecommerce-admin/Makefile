-include .env

db-login:
	docker exec -it ${DB_DOCKER_CONTAINER} bash && psql && \connect ${DB_NAME}
	psql
	\connect ${DB_NAME}
postgres:
	docker run --name ${DB_DOCKER_CONTAINER} -p ${DB_PORT}:${DB_PORT} -e POSTGRES_USER=${DB_USER} -e POSTGRES_PASSWORD=${DB_PASSWORD} -d postgres:16.2-alpine3.19	
# this will create a new container and run it

stop_containers:
	docker stop ${DB_DOCKER_CONTAINER}
# this will stop the container with the name papai-db

start_containers:
	docker start ${DB_DOCKER_CONTAINER}
# this will start the container with the name papai-db after it has been stopped

createdb:
	docker exec -it ${DB_DOCKER_CONTAINER} createdb --username=${DB_USER} --owner=${DB_USER} ${DB_NAME}

dropdb:
	docker exec -it ${DB_DOCKER_CONTAINER} dropdb ${DB_NAME}

cleardb:
	pnpm prisma migrate reset
	pnpm prisma db push

migrate:
	pnpm prisma generate
	pnpm prisma db push

stripe-listen:
	stripe listen --forward-to localhost:3000/api/webhook