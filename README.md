kango-citelet
=============

Tool for extracting metadata from scholarlay journal articles. Metadata is sent to the Center for Open Science's Scinet database. More information available here: https://github.com/CenterForOpenScience/scinet

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


