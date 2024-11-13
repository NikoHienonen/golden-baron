sudo git pull
sudo npm i
sudo npm run build
sudo cp ./dist/* /var/www/html -r
sudo systemctl restart apache2