# UniBuddyCypress
This project contains autmation scripts for basic workflows usong cypress

# Requirement:
npm

# Steps:
Copy the repository in local
Run below steps to install cypress:
  1. npm init
  2. npm install cypress --save-dev

# Modules
Tests are placed inside Unibuddy folder of cypress
Generic/Global functions are inside Commands folder

# Steps to install mochawesome for reporting
  1. npm install --save-dev mochawesome
  2. npm install mochawesome-merge --save-dev
  3. npm install  -g mochawesome-report-generator
  
# Command to run the tests:
.\node_modules\.bin\cypress run --spec .\cypress\integration\Unibuddy\*.js --browser chrome
for headless: 
.\node_modules\.bin\cypress run --spec .\cypress\integration\Unibuddy\*.js
