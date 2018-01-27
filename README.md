# TEDx University of Washington 2018

## Getting started
#### Pre-requisites
Before you can begin editing files, make sure that you have [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) installed on your machine. These are essential to making sure you have an updated version of the project that you can run. Additionally, make sure you have a text editor (suggested include Sublime Text, Brackets, or Atom)

#### Downloading Project
Once you have downloaded the pre-requisites, make a folder on your computer to store the project files. Using the terminal on your machine (command prompt for Windows) change directories so that you are in your new folder. Once there, run the following commands:
```
git init
git remote add origin https://github.com/tedxuofw/tedxuofw2018
git fetch --all
for remote in `git branch -r `; do git branch --track $remote; done
git pull --all
```
This will set up an empty Git project in your folder and point it to the online repository from which you will download your files.

#### Making changes 
Before you can make any of your own changes, it is important to make sure that you have the most updated version of the project. It is also important that you are working on the dev branch (the master branch is what is used to host the [website](tedxuofw.github.io)). Run the following command to test if anyone has made any alterations and download them.
```
git checkout dev
git pull origin master
```

Now, using your text editor make the changes to the files you would like. Once you are done and want to push your updates, run the following commands:
```
git add .
git commit -m "Some short message describing your changes"
git push origin master
```
This will recognize which files you have changed, commit them to your project with a short message, and push them online.

#### Deploying the site 
If you want the website to reflect the changes that you've made, you can run `npm run deploy`. This will take the src/ folder on your local dev branch and push it to master branch so the [website](tedxuofw.github.io) will update. 

### Running React
While making changes to the project, you can compile and test the React app to see what it looks like. In your terminal, navigate to the project folder on your machine and run
```
npm start
```
This will run the 'start' script in the package.json file. If everything goes well, you should be able to open any web browser and view your project at [http://localhost:8080/#/](http://localhost:8080/#/). 

 - How to install new node packages so that they get stored w/ project
 - How to debug common problems?
 - How to gh-pages?