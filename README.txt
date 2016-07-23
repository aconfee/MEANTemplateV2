Example mean stack project.

IMPORTANT!

Reset remotes to git and heroic or this will override other projects.

TO DEVELOP:

run 'gulp distribute-watch' to watch all scss and js files. On save they will be re minified/uglified/distributed.
run 'nodemon' to watch for file changes and restart server.

By running both of these, I can just work and save files, and refresh my page to see changes.

App is running on localhost:3000.


TO DEPLOY:

App is configured to work with heroku. Procfile is already made. Simply create new heroku app to deploy. (heroku create?).
Use 'heroku local' to see changes locally. Run on localhost:5000.


DESIGN:

Express is serving an SPA. Express is meant to be extended to have an api and connect to mongoose. Will probably make
another project with that set up, but this is meant to be extremely minimal.

SPA is being served when Express sends static folder, app_client, to the browser. The 'static' function in Express
defaults to any file named 'index'. In this project, index.html is used as an entry point for our SPA. All routing and
everything is handled by angular in app_client. 
