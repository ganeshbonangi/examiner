
# auth-cell

This project was generated with the [Angular Full-Stack Generator](https://github.com/DaftMonk/generator-angular-fullstack) version 3.7.6.

## Getting Started

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js and npm](nodejs.org) Node ^4.2.3, npm ^2.14.7
- [Bower](bower.io) (`npm install --global bower`)
- [Gulp](http://gulpjs.com/) (`npm install --global gulp`)
- [MongoDB](https://www.mongodb.org/) - Keep a running daemon with `mongod`

### Developing

1. Run `npm install` to install server dependencies.

2. Run `bower install` to install front-end dependencies.

3. Run `mongod` in a separate shell to keep an instance of the MongoDB Daemon running

4. Run `gulp serve` to start the development server. It should automatically open the client in your browser when ready.

## Build & development

Run `grunt build` for building and `grunt serve` for preview.

## Testing

Running `npm test` will run the unit tests with karma.
=======
# examiner


Where git commands executes??


1) git status

case 1)
 git repo no change
case 2)
red: that means you changed on the specified files and not added for commit(not eligible)
case 3)
green:that means you changed on the specified files and added for commit(eligible)


2)  gitk

for checking the changes in the existing changed files in local repositery

3)   git add /*file path*/

this will tell what files do you want to add to repositery

it will promote red colored files to green color files

4) git commit -m "why you commit ??"

It will commit code to local repositery

5) git push origin master

	pull code to git master(online)

6)git pull origin master

	pull code from git master(online)

Sublime 

Goto 'projects' tab in menu bar then 'add folder to project' then your add your 'examiner' folder



Deployemnt procedue:


gulp build,

then go to dist folder

git add .
git commit -m ""
git push heroku master
 heroku ps:scale web=1  // to restart server

 heroku logs // to see log file

 DB back up cmd
 mongodump -h ds061208.mlab.com:61208 -d examcolors -u ganesh007 -p ganesh007 -o /Users/ganeshbonangi/Desktop/workspace/examiner/dbbackup/
