# Questions and Answers Backend API

## Overview 
 Given an existing retail web application whos backend could not handle the increasing load of web traffic. My teams job was to do a complete redesign of the backend and be able to handle the ever increasing amount of users. I was specifically tasked with the questions and answers sevice of the application.

## Technology Choices 
### Server
node.js express 

### Database 
Looking at the way the data was structured in the cvs files given and that multiple users will be accessing data at the same time. I chose a Relational Database Managment System. While researching I found that postgres could handle very concurrency well better than MySQL or others so I chose PostgreSQL.


#### Schema 
### Use-Case Diagram
![alt text](https://github.com/PhilipKoller/Questions-SDC/blob/main/Schema.png)


## Extraction, Transform, and Load
The extration was done by the client when they gave us the csvs containing all the data. Loading was done through a script that created tables imported data. The transforamtion was taking out the dublicare columns from the millions of rows that were given. 

.. loading was Loading was done by creating a schema file to create a databas create the tables shown in the schema, and importing the data into the appropriate tables.

Transforming the data was done by querying each column looking for data in a format that doesn't match what is expected (ex: price containing non-number characters or a negative quantity). Part of this transformation was also to identify any duplicate columns. From the millions of rows given there were only about 100 rows that had duplicates or bad information.

## Cloud Service 


## Testing 
# K6
Before moving onto AWS the API was tested using K6 on my local machine. Since my machine contains better hardware than a T2.micro instance the goals to reach were set much higher. Shown below are the results from K6 load tests for the Questions endpoint and the Answers endpoint.


# Loader.io
Loader.io was used to test the application once it was moved onto AWS. This service would allow me to simulate a large load on the application testing both the questions endpoint and answers endpoint. Upon performing multiple tests it was discovered that the answers endpoint could handle a much higher load (1.5x) and lower latency.

# NGINX

Upon inital setup of the API it was discovered that a single instance would not be enough to handle the desired load. The results from a single instance was 300 clients/second at a latency of < 100ms and an error rate of 0%. In order to scale a load balancer would have to be used. NGINX was chosen due to its reputation being a well known load balancer. In order to use NGINX as a load balancer more than one server is required. I made a decision to use 5 instances of servers and the reason for this was to test the different routing methods NGINX offers. At this point there are 7 total instances: 5 servers, 1 load balancer, and 1 database. Below shows the results that come from testing each routing method.

# New Relic

# possible Improvements 

Although the current design choice allow the API to handle web-scale traffic there are improvements that could be met. These improvements include...

Database load balancer
More T2.micro instances to continue horizontally scaling
Use instances with better hardware (vertically scaling)
Tweak NGINX config files to find optimized setup as scaling increases
Tweak PostgreSQL Pool config to find optimized setup as scaling increases
Remove middleware (Morgan and New Relic)

