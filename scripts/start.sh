#!/bin/bash
if [ -f .env ]; then
  source .env
fi

apt update
apt install ansible -y
echo "##############"
echo "Next step will"
echo "be play BooK"
echo "##############"
sleep 8
ansible-playbook ./scripts/book/metabase.yml

source /usr/app/.env

echo "###################"
echo "Making sure the api has"
echo " been reached out ADM_ID"
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
