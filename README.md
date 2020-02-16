# cypress-tests
Tutorial followed from: https://learning.oreilly.com/videos/cypress-modern-automation-testing

### cypress IMP features:
- allows us to see what happened on every step with screenshot and error messages 
- cypress supports css selectors only
- update configurations in cypress.json which overrides default behaviors such as wait time
- by default if run in terminal - cypress runs in headless in electron

### Commands
- to open cypress runner
```
./node_modules/.bin/cypress open
```

- ###to run all cypress tests (runs headless)
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

### Other info
- download cropath as browser extention.
- command 'visit' to visit URL and 'get' to get element
- className : .classname
- id: #idname
- customized attribute: tagname[attribute=value] : input[type='search']
- tagNames : form input
- ('.product:visible') will only find visible elements
- jquery - $('.product')
- jquery - document.getElementsByClassName('product')


