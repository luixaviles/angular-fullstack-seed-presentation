angular-fullstack-seed-presentation
===================================
> An Angular seed project generated and customized using [angular-fullstack-generator](https://github.com/DaftMonk/generator-angular-fullstack) and [Yeoman](http://http://yeoman.io/) that allows you to to start your application step by step.
> This application adds support of [Protractor](https://github.com/angular/protractor) framework for E2E testing.
> Application useful to understand BDD(Behavior-Driven Development), Support of angular-router to manage states to change between views and more. Try the code!

## Prerequisites

* NodeJS - Download and Install [NodeJS](http://http://nodejs.org)
* Git - Download and Install [Git](http://git-scm.com)

You need to have installed NodeJS and Git in your machine before to start.
Use `Git bash` to run all commands if you are on Windows platform.

## Presentation

If you want to learn more about used technologies in the project, you can see a presentation [here](https://github.com/luixaviles/angular-fullstack-seed-presentation/tree/master/presentation).
Just follow the instructions to run the presentation. Please feel free to contact me if you have any question.

## Usage

Clone the basic project and `cd` into it:
```
git clone https://github.com/luixaviles/angular-fullstack-seed-presentation.git
```

```
cd angular-fullstack-seed-presentation
```

Install `yeoman`:
```
npm install -g yo
```

Install generator `angular-fullstack`, using specific version 1.4.2:
```
npm install -g generator-angular-fullstack@1.4.2
```

Run `grunt serve`, to allow application running. Default browser should be open with `localhost:9000`
```
grunt serve
```

To run unit tests:
```
grunt karma
```

To run E2E tests:
```
grunt e2e
```

To add new views, just type:
```bash
yo angular-fullstack:view user
```

To add new controllers, just type:
```bash
yo angular-fullstack:controller user
```

To add new services, just type:
```bash
yo angular-fullstack:service user-service
```

To see more generators available you can visit main documentation page of [generator-angular-fullstack@1.4.2](https://github.com/DaftMonk/generator-angular-fullstack/tree/v1.4.2)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
