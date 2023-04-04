# Questions and Answers Backend API

## Overview 
 Given an existing retail web application whos backend could not handle the increasing load of web traffic. My teams job was to do a complete redesign of the backend and be able to handle the ever increasing amount of users. I was specifically tasked with the questions and answers sevice of the application.

# Technology Choices 
### Server
node.js express 

### Database 
Looking at the way the data was structured in the cvs files given and that multiple users will be accessing data at the same time. I chose a Relational Database Managment System. While researching I found that postgres could handle very concurrency better than MySQL or others so I chose PostgreSQL.


### Schema 
![alt text](https://github.com/PhilipKoller/Questions-SDC/blob/main/Schema.png)


### Extraction, Transform, and Load
The extration was done by the client when they gave us the csvs containing all the data. Loading was done through a script that created tables imported data. The transforamtion was taking out the duplicate rows from the millions of rows that were given. 


## Cloud Service 
The cloud chosen for hosting was AWS. There I scaled the application horizontally Using 3 AWS T2.micro instances  

## Testing 
## K6
Before moving onto AWS the API was tested using K6 on my local machine. Since my machine contains better hardware than a T2.micro instance the goals to reach were set much higher. 


## Loader.io
Loader.io was used to test the application once it was moved onto AWS. This service would allow me to simulate a large load on the application.
![alt text](https://github.com/PhilipKoller/Questions-SDC/blob/main/Loader2.png)

## NGINX
I used NGINX because it has a reputation of being a well known load balancer. The routing method I used was least-connected.


## Possible Improvements 
* More T2.micro instances to continue horizontally scaling
* Use instances with better hardware (vertically scaling)
* Tweak NGINX to use IP hash routing
* Remove middleware (New Relic etc..)

