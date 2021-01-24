
set -eu

export DEPLOY_DOCKER_MACHINE="conoha1" # 設定したDocker Machineの名前
export DEPLOY_SERVICE="api" # ビルド対象のDocker Composeサービス

# Change docker context to production environment
eval $(docker-machine env $DEPLOY_DOCKER_MACHINE)

# Build, and then Deploy
docker-compose build --no-cache $DEPLOY_SERVICE
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --no-deps -d $DEPLOY_SERVICE

# Reset docker context
eval $(docker-machine env -u)