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