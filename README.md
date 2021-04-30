# cynthiaebert.de

![Website](https://img.shields.io/website?url=http%3A%2F%2Fcynthiaebert.de%2F) ![URL](https://img.shields.io/badge/URL-http%3A%2F%2Fcynthiaebert.de%2F-D6004C)
This is my source code for my personal webpage, hosted at [Hetzner Online GmbH](https://www.hetzner.com/), holding basic contact information and my skills.

I'm using static HTML pages with self-written CSS compiled from my SASS code for the styling. With some vanilla JavaScript, I look for the users system theme settings to render either the Light or Dark Mode of my page. A toggle button allows the user to switch between those and save it in the users local storage.

## Deployment environment

In my workflow I use 3 key branches: main, develop & features. Most of my development progress happens inside of develop, only when the code is ready for a release, it will be pushed to main. Feature branches are being used in case I'm working on a bigger feature which needs to be on it's own branch, which will be merged after finalization.
When a commit is going through main, a GitHub Action is getting triggered which connects to my webhost via SSH and downloads & unzips the source code to the server for deployment.
