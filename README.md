<b>Installing meteorjs</b>
```sh
curl https://install.meteor.com | /bin/sh
```

<b>Connecting to a Remote MongoDB Instance</b>
OSX: <br/>
```sh
vim ~/.bash_profile 
export MONGODB_URL=mongodb://<hostname>:<port>/<databasename>
``` 

<b>Installing meteorite</b>
```sh
sudo npm install -g meteorite
```

<b>Starting the application (development mode)</b>
```sh
mrt
```