# cypress-tests
Tutorial followed from: https://learning.oreilly.com/videos/cypress-modern-automation-testing

## cypress IMP features:
- allows us to see what happened on every step with screenshot and error messages - with before and after 
- cypress supports css selectors only
- update configurations in cypress.json which overrides default behaviors such as wait time
- by default if run in terminal - cypress runs in headless in electron
- Cypress uses Mocha and chai. Chai for assertions and mocha framework to structure our tests. Some more information here: https://docs.cypress.io/guides/references/bundled-tools.html#Mocha
- Cypress only supports chrome, chromium, electron.
- Cypress is Asynchronus - but takes care of it from backend so that we can write syncronus code.

## Commands
- to open cypress runner
```
./node_modules/.bin/cypress open
```

- to run all cypress tests (runs headless)
```
./node_modules/.bin/cypress run
```

- to run all cypress tests with browser
```
./node_modules/.bin/cypress run --headed
./node_modules/.bin/cypress run --browser chrome
```

- to run one spec file
```
./node_modules/.bin/cypress --spec "path/to/file"
```

## Other info
- download cropath as browser extention.
- command 'visit' to visit URL and 'get' to get element
- className : .classname
- id: #idname
- customized attribute: tagname[attribute=value] : input[type='search']
- tagNames : form input
- ('.product:visible') will only find visible elements
- jquery - $('.product')
- jquery - document.getElementsByClassName('product')


