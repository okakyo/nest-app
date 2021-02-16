
sql:
	docker-compose exec db  mysql -uroot -p


migrate:
	npm run typeorm migration:create -- -n Development

migrate-up:
	npm run typeorm:run 


migrate-down:
	docker-compose exec api npm run migrate:revert

