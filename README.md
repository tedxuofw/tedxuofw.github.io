# TEDx University of Washington 2018

## Getting started
#### Pre-requisites
Before you can begin editing files, make sure that you have [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) installed on your machine. These are essential to making sure you have an updated version of the project that you can run. Additionally, make sure you have a text editor (suggested include Sublime Text, Brackets, or Atom)

#### Downloading Project
Once you have downloaded the pre-requisites, make a folder on your computer to store the project files. Using the terminal on your machine (command prompt for Windows) change directories so that you are in your new folder. Once there, run the following commands:
```
git init
git remote add origin https://github.com/SohamPardeshi/tedxuofw2018
```
This will set up an empty Git project in your folder and point it to the online repository from which you will download your files.

#### Making changes 
Before you can make any of your own changes, it is important to make sure that you have the most updated version of the project. Run the following command to test if anyone has made any alterations and download them.
```
git pull origin master
```

Now, using your text editor make the changes to the files you would like. Once you are done and want to push your updates, run the following commands:
```
git add .
git commit -m "Some short message describing your changes"
git push origin master
```
This will recognize which files you have changed, commit them to your project with a short message, and push them online.

### Running React
 - How to npm start
 - How to install new node packages so that they get stored w/ project
 - How to debug common problems?
 - How to gh-pages?