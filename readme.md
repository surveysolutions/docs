# Survey Solutions documentation website

This repository contains articles (and binary files) from [https://docs.musyrvey.solutions](https://docs.mysurvey.solutions)

We use HUGO - static site generator framework to build this site. You can read more about Hugo
[here](https://gohugo.io/getting-started/).

## Contributing content

- clone the repository locally.

- download Hugo from [here](https://github.com/gohugoio/hugo/releases) - this is a single binary without *any* dependencies. Currently we build the site with [0.70.0 version for Windows 64bit](https://github.com/gohugoio/hugo/releases/download/v0.70.0/hugo_0.70.0_Windows-64bit.zip)

- create a new article by simply adding new file (with .md extension) to the appropriate section

- run hugo in the root folder (add hugo.exe to the path or call with the full path, i.e. c:\hugo\hugo.exe) to build the site and see whether there are any syntax errors.

- run hugo server to see how page/site looks like in the browser

- commit your changes and push to the remote repository

## Contributing content lite mode

- Clone repository
- Install Nodejs
- run `npm i` - this will install Hugo from npm repository into `node_modules` folder
- run `npm run serve` to run development Hugo server with auto reload with Draft pages preview
- commit and push changes
