Tests Status:

[![BuildStatus](https://travis-ci.org/aconfee/MEANTemplateV2.svg?branch=master)](https://travis-ci.org/aconfee/MEANTemplateV2)

Description:
This project is my base scaffolding for any MEAN stack project.
- Uses Angular 2.
- Has tests wired in already testing server health, API endpoints, and Angular 2 components.
- Has build system set up with Gulp.
- Has Procfile specified for easy deployment to Heroku
- Has local MongoDB instance wired up.

TERMINAL COMMANDS

SETUP:
- `npm install` -- Installs all dependencies.
- `npm run build` -- Uglifies, minifies, distributes, and builds project.

DEVELOP:
- `npm run dev:start` -- Starts server with nodemon. Restarts server on file changes.
- `npm run dev:watch` -- Watches all specified files and redistributes them on saves.
- `npm run dev:lint` -- Show all js warnings and errors.
- `npm test` -- Runs Mocha unit tests.

DEPLOY:
- `npm run deploy` -- Deploys code to Heroku.


FIRST TIME SETUP

When this project is first cloned, run the setup specified above (install and build), then follow these instructions.

1. Prepare For Heroku Deployment:
  - Run `heroku create`
  - Verify Heroku remote was added with `git remote -v`
  - Add git as Heroku remote `heroku git:remote -a <appname>``
  - Deploy with `git push heroku master`
  - Open app with `heroku open`
