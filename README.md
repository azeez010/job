# job-microservice
This is an api for dev to practice their front end skills. so that it can be easy to use, i used json for data persistent below are the available endpoints and how to use it
* 1. post-job
After cloning the project run npm start to start the server, to post jobs call a POST requests localhost:3000/post-job with a compulsory body like this
  {
        "title": "djange dev",
        "role": "any thing",
        "salary": "any amount",
        "body": "job description"
    }
 * 2. get all jobs
 to get all jobs call a GET requests localhost:3000/all-jobs
 
 * 3. lastly to search for a particular phrase e.g django, node.js make a GET request to localhost:3000/search?q={keyword}, and it will return a json data contains the data needed
 
 Your free to contribute, #MotiSoroSoke
 
