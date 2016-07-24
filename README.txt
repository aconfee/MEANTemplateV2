Tests Status:

Description:
This project is my base scaffolding for any MEAN stack project.
- Uses Angular 2.
- Has tests wired in already testing server health, API endpoints, and Angular 2 components.
- Has build system set up with Gulp.
- Has Procfile for easy deployment to Heroku
- Has local MongoDB instance wired up.

Setup:

Run `npm install`

Run:

Run `nodemon` and view on localhost:3000.

Develop:

run `gulp distribute-watch` to watch all scss and js files. All files minified and bundled into dist.*.

Test:

Deploy:

Procfile is already set up for Heroku deployment.
Run `heroku create`

Verify Heroku remote was added with `git remote -v`

Add git as Heroku remote `heroku git:remote -a <appname>``

Deploy with `git push heroku master`

Open app with `heroku open`
