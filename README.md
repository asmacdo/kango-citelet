kango-citelet
=============

Citelet is a tool for extracting metadata from scholarlay journal articles. Metadata is sent to the Center for Open Science's Scinet database. More information on scinet is available here: https://github.com/CenterForOpenScience/scinet

These are the common files that kango builds into extensions for firefox, chrome, and safari. The output folder contains the install packages for each browser. 

## To Install

#### Firefox

Drag .xpi file from the output folder onto the firefox icon and click "OK".

#### Chrome

1. Extract the .zip file from the output folder. 
1. Open Chrome, go to Tools, Extensions. 
1. Check the "Developer mode" box. 
1. Click "load unpacked extension" and select the folder you extracted.

#### Safari

TBD

## Build

For relevent Kango docs and download, please see:

http://kangoextensions.com/docs/general/creating-and-building-browser-extensions.html

Install kango and create a new project. Place the files from this repo (minus the output folder) into the src/common directory. Build the files and install the appropriate file from the output directory.

##How it Works

Kango builds an extension for each browser based on javascript files in the src directory. For actions that vary based on browser, kango provides a library that will translate these actions when building.

####Scinet and Citelet Changes

A minified version of Citelet (the bookmarklet) must be loaded to scinet. This address is stored as the constant CITELET_SRC in the cach-control.js file. 

If the bookmarklet finds an article, it creates a hidden div to trigger a thank you message to the user.

####Caching

Store the current time and retrieve the timestamp of the last citelet load. If it has been more than 1 day, use Kango's storage and HTTP request to get and store the bookmarklet.

####Loading

On page load, ensure that the latest version of Citelet is cached and then append the script to the page and the bookmarklet will run. If the bookmarklet created an item called "citeletPublisher" then the page is an article and the user should be thanked. 



