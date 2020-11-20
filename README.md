# mvst_github_fetcher

github fetcher is an application that give you the possibility to search for github profiles
on the top you'll find a search bar where you will type the github username. in case the username exists, a profile and 
repos of that specific user will be displayed and you can filter repos by name.

* the github api give you access only for limited request per hour. consider using a vpn to change your IP address in case you exceeded the limit.

## Thinking in Components

A front-end application built with React is built entirely out of React components. Components can contain other components, but each component should be responsible for doing only one thing

* `App` - The top level container for the entire application. This is the component that will be rendered to the DOM
* `Search` - A container component for the top navigation bar
* `Profile` - Responsible for desplaying all the profile details and repositories information
* `user_information` - responsible for rendering the user information: name, profile image, bio ...
* `repo_information` - responsible for rendering the repos information: name, language, last update ...

* `Home_page` - the first Interface you'll see where you can search for user name (not working for now)

## Project set up
- [ ] to make it work you will need to have a token. for more details on how to get a token follow this link:
    ('https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token')
- [ ] add .env file in the root directory where you put the token in this format:
                        TOKEN = 'your token here'
- [ ] Install dependencies with `npm install`
- [ ] Install dependencies with `cd/ client npm install`

to deploy the app you will need to make:
  - [ ] .env.production file in the root directory where you will put the  heroku link if you are deploying on heroku
        for exemple : REACT_APP_URL = https://bestagenda.herokuapp.com/ (it should be: REACT_APP_URL = 'your url' )
 
  - [ ] .env.development file in the root directory where you'll put your local develpment link in this format:
         REACT_APP_URL = http://localhost:8080/ (it should be: REACT_APP_URL = 'your url' )
 
  - [ ] you need to install env-cmd using : npm install --save env-cmd
  
  
 - [ ] you need mention your npm and node versions in the package.json like this:
           "engines": {
             "npm": "6.14.5",
             "node": "12.18.2"
           },
           
thank you for your interest. Hope you will like the project.