-include .env

db-login:
	docker exec -it ${DB_DOCKER_CONTAINER} bash && psql && \connect ${DB_NAME}
	psql
	\connect ${DB_NAME}
postgres:
	docker run --name ${DB_DOCKER_CONTAINER} -p ${DB_PORT}:${DB_PORT} -e POSTGRES_USER=${DB_USER} -e POSTGRES_PASSWORD=${DB_PASSWORD} -d postgres:16.2-alpine3.19	
	# docker run --name ${DB_DOCKER_CONTAINER} -p ${DB_PORT}:${DB_PORT} -e POSTGRES_USER=${DB_USER} -e POSTGRES_PASSWORD=${DB_PASSWORD} -d postgis/postgis:16-3.4-alpine
	
createdb:
	docker exec -it ${DB_DOCKER_CONTAINER} createdb --username=${DB_USER} --owner=${DB_USER} ${DB_NAME}

dropdb:
	docker exec -it ${DB_DOCKER_CONTAINER} dropdb ${DB_NAME}

cleardb:
	pnpm prisma migrate reset
	pnpm prisma db push
