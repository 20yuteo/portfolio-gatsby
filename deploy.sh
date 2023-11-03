source ./.env
npm run build && aws s3 cp ./public s3://${DOMAIN}/ --recursive