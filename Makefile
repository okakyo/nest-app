# docker-compose の立ち上げについてのコマンド一覧
up:
	docker-compose -f docker-compose.yml -f docker-compose.local.yml up

up-build:
	docker-compose -f docker-compsoe.yml -f docker-compose.local.yml up --build

build:
	docker-compose -f docker-compsoe.yml -f docker-compose.local.yml build

api:
	docker-compose exec api /bin/sh

sql:
	docker-compsoe exec db /bin/sh

# マイグレーションについてのコマンド一覧

migration-create:
	docker-compose exec api  sh -c "npm run typeorm:migration:create $(name)"

migration-generate:
	docker-compose exec api  sh -c "npm run typeorm:migration:generate $(name)"

migration-run:
	docker-compose exec api  sh -c "npm run typeorm:migration:run"

migration-revert:
	docker-compose exec api  sh -c "npm run typeorm:migration:revert"

seeding-run:
	docker-compose exec api  sh -c "npm run typeorm:seed:run"

schema-drop:
	docker-compose exec api  sh -c "npm run typeorm:schema:drop"

schema-sync:
	docker-compose exec api  sh -c "npm run typeorm:schema:drop && npm run typeorm:migration:run && npm run typeorm:seed:run"
