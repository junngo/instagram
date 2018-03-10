### Environment Setting

#### install pipenv
```
sudo pip3 install pipenv
```


#### install virtual environment
```
pipenv --three
```

#### install package(install package of django's name)
```
pipenv install django
```

#### run envy
```
pipenv shell
```

- pip install is global
- pipenv install is env

#### install cookiecutter and make django use template
```
sudo pip3 install cookiecutter
pipenv shell
cookiecutter https://github.com/pydanny/cookiecutter-django
```

#### install needed django package part
```
pipenv shell
pipenv install -r requirements/local.txt
```

#### install postgresql and run
```
sudo apt-get install postgresql
psql -h 127.0.0.1 -U postgres template1
```

### start django

#### create app
```
django-admin startapp images
```

#### db, make migrations
```
python manage.py makemigrations
python manage.py migrate
```

#### create super user
```
python manage.py createsuperuser
```
