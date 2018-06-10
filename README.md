## Environment Setting

### Backend

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

#### install djangorestframework to make django api
```
pipenv shell
pipenv install djangorestframework
```

#### install taggit (Tags for the photos)
```
pipenv install django-taggit
pipenv install django-taggit-serializer
```
Add 'taggit' at THIRD_PARTY_APPS of setting file(base.py)
```
python manage.py migrate
```
Wrtie at models.py "from taggit.managers import TaggableManager"

install jwt
```
pipenv install djangorestframework-jwt
```

write usage to base.py
```
http://getblimp.github.io/django-rest-framework-jwt/
```

install django-rest-auth for logging
```
pipenv install django-rest-auth
```

### Frontend

#### install react
```
yarn global add create-react-app
create-react-app frontend
cd frontend
yarn start
```

#### eject to use webpack
```
cd frontend
yarn eject
```

#### install node-sass and loader to use scss
```
yarn add node-sass sass-loader
```

#### accept to approach from port 3000(react) to port 8000(django)
```
pipenv install django-cors-headers
```

#### install redux in our project
```
cd front
yarn add redux react-redux
```

#### install redux middlewares thunk
when I want to send action, I send action. (not immediately)
```
yarn add redux-thunk
```

#### add logger to dev, not global
```
yarn add redux-logger --dev
```

#### add react router
```
create-react-app react-router-contact-list
yarn add react-router-dom
```

#### syncing react router with redux
```
yarn add react-router-dom react-router-redux@next history
```

#### debugging redux like a pro with reactotron
```
yarn add reactotron-react-js
yarn add reactotron-redux
```

#### installing redux dev tools
```
yarn add redux-devtools-extension --dev
```

#### multi language with redux
```
yarn add redux-i18n
```

#### default css setting init(not overriding, all setting value 0)
```
yarn add reset-css
```

#### use the react icons
```
yarn add react-ionicons
```

#### to translate
```
// add package.json -> "extract": "i18n_extract"
yarn extract
// check the file that is template.pot
// next methods
// create se.po under locales
// add package.json -> "import": "i18n_import --encoding=utf-8"
yarn run import
```

#### login in with facebook
```
yarn add react-facebook-login
```

#### Making the comments resizeable
```
yarn add react-textarea-autosize
```
