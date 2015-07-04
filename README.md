Mozilla Colombia home page
==========================
This is the website for Mozilla Colombia community. Inspired on Mozilla Tunisia home page. This repo doesn't include code from Blog.

## Requeriments
`pip` and `virtualenv` need to be installed on your machine. Then you set a virtual environment:

```
mkdir venv
virtualenv venv
source venv/bin/activate
```

## Run local

Clone the project
```
cd venv
git clone https://github.com/MozillaColombia/website.git
```

Install dependencies
```
cd website
pip install -r requirements.txt
```

Run the site
```
$ python mozco.py
```

Start the server
```
Open `http://localhost:5000/`
```

## Run production

We deploy the website on apache2 server. `pip` and `virtualenv` need to be installed on your machine.

Installing dependencies
```
sudo apt-get install apache2 libapache2-mod-wsgi python-dev python-pip
```

Enable the apache `mod_wsgi`
```
sudo a2enmod wsgi
```

Clone this repository on `/var/www/` directory. So the final path for the site will be `/var/www/website`. 
```
cd /var/www/
git clone https://github.com/MozillaColombia/website.git
```

Install dependencies
```
cd website
pip install -r requirements.txt
```

Then, add a `VirtualHost` entry on apache config file
```
    <VirtualHost *:80>
      ServerName www.mozillacolombia.org
      ServerAdmin gioyik@mozillacolombia.org
      WSGIScriptAlias / /var/www/website/flaskapp.wsgi
      <Directory /var/www/website/>
        Order allow,deny
        Allow from all
      </Directory>
      Alias /static /var/www/website/static
      <Directory /var/www/website/static/>
        Order allow,deny
        Allow from all
      </Directory>
      ErrorLog ${APACHE_LOG_DIR}/www-mozco-error.log
      LogLevel warn
      CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
```

Reset apache2 service if is necesary. You should see the site running on your server.
