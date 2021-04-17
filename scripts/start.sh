#!/bin/bash
if [ -f .env ]; then
  source .env
fi
scripts="/scripts/book"

apt-get update
apt-get install ansible -y
echo "##############"
echo "Next step will"
echo "be play BooK"
echo "##############"
sleep 8
ansible-playbook -i .$scripts/dev.cfg \
  .$scripts/metabase.yml

source /usr/app/.env

echo "###################"
echo "Making sure that the api"
echo "has reached ADM_ID"
echo "###################"
env | grep -i ^META
echo "###################"

echo "####"
echo "NPM"
echo "####"
npm update
npm install
npm audit fix
npm run build
npm run migration
npm run test
