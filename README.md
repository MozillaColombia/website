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

1 - Clone the project
```
cd venv
git clone https://github.com/MozillaColombia/website.git
```

2 - Install dependencies
```
cd website
pip install -r requirements.txt
```

4 - Run the site
```
$ python mozco.py
```

5 - Start the server
```
Open `http://localhost:5000/`
```

## Run production

We deploy the website on ngnix server, if you a different way to server the website, feel free to try and let us know any problem.

1 - Installing dependencies :
```
sudo apt-get install ngnix libapache2-mod-wsgi python-dev
```

2 - Enableling the apache `mod_wsgi` :
```
sudo a2enmod wsgi
```

3 - Locate your apache www/ directory :
```
In this case, `website` was cloned in `/var/www/website` don't forget this path we will need the next steps
```

4 - Create the wsgi file :
In `/var/www/website` create a new file : `flaskapp.wsgi` then put this content : 
```
#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0, "/var/www/www-moztn/")

from mozco import app as application # moztn is mozco.py
```

5 - Apache config file :
We will add a `VirtualHost` entry for our app
```
    <VirtualHost *:80>
      ServerName www.mozilla-tunisia.org
      ServerAdmin rednaks@mozilla-tunisia.org
      WSGIScriptAlias / /var/www/www-moztn/flaskapp.wsgi
      <Directory /var/www/www-moztn/>
        Order allow,deny
        Allow from all
      </Directory>
      Alias /static /var/www/www-moztn/static
      <Directory /var/www/www-moztn/static/>
        Order allow,deny
        Allow from all
      </Directory>
      ErrorLog ${APACHE_LOG_DIR}/www-moztn-error.log
      LogLevel warn
      CustomLog ${APACHE_LOG_DIR}/access.log combined
    </VirtualHost>
```