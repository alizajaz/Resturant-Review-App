# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
   * Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

# My contribution to this project
Step 1.
```sh
Get a MapBox API key, Get the map on the screen
If you do not already have a MapBox account, go ahead and create one
MapBox API is free to use (no need to provide any payment information). I create one account and create a token and plug it into 2 different file main.js in mapboxToken and resturant_info.js(mapboxToken)
```
Step 2.
```sh
Convert the provided site to use a responsive design. 
I have use flex, media queries and change width to 100% for responsive websites. You can see the changes in style.css.
```

Step 3.
```sh
Implement accessibility features in the site HTML
At first i tried to give tab a number starting from 0, 1, 2. Then i got error while check its accessibility. Therefore i put -1 as a tab index and used focus. also i get error in image file since it didn'y have alt file . therefore, i created image.alt= restaurant.name; in main.js and give value in image alt in resturants.json file.
```

Step 4.
```sh
a.Add a ServiceWorker script 
for registration (main.js)
// Registration take place here
if ('serviceWorker' in navigator) {
   window.addEventListener('load', ()=> {
    navigator.serviceWorker
    .register('../sw_catched_pages.js')
      // Registration was successful
    .then(reg => console.log('ServicWorker registration successful: Registered'))
      // registration failed :(
    .catch(err => console.log(`ServiceWorker registration failed: ${err}`));
  });
}
b.Then i created 2 file. There are two ways to get file. sw_catched_pages.js file is the one you can choose the important file and install and fetch whereas sw_cached_site.js helps to clone all file and fetch. Now, a user will be accessible when the user is offline. 

```
# Some correction while submitting my project

## main.js
1. In index.html, the title of the application and the restaurant's name have different levels of importance, so they should have different levels of heading style. E.g. h1 for the application title and h2 for the restaurant's name.

 * Descriptive labels should be defined for each of the VIEW DETAILS links on the home page of the application to avoid screen readers for pronouncing the word view details for all the images. For example, an aria-label of View details of the restaurant Emily could be set for the restaurant Emily.

## resturant.html
2. The <ul> tag (breadcrumb) in restaurant.html needs an appropriate aria label.
The <ul> tag (breadcrumb) in restaurant.html should be surrounded by a <nav> tag or it should have an aria role specifying that the breadcrumb is for navigation.
   
 * The map needs an appropriate aria role to explain that it is an external application in the website.
   
 * In restaurant.html, the title of the application, the restaurant's name and the title of reviews have different levels of importance, so they should have different levels of heading style. E.g. h1 for the application title, h2 for the restaurant's name and h3 for the title of reviews.
   
## index.html
 3. The map needs an appropriate aria role to explain that it is an external application in the website.
 
 ## resturant_info.js
 4. Provide the alt attribute for each image in the application.
* Please consider making the alt value descriptive enough stating it is an image of the restaurant. This is very important for people using screen readers.

* For example Photo extract from Emily’s Restaurant

* In restaurant.html, the title of the application, the restaurant's name and the title of reviews have different levels of importance, so they should have different levels of heading style. E.g. h1 for the application title, h2 for the restaurant's name and h3 for the title of reviews.


