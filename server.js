var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var fs = require('fs');
app.use(bodyParser())

app.get('/search', function (req, res) {
    var search_result = []
    fs.readFile('./json_db.json','utf-8', function(err, data) {
        if (err) return console.error(err);
        let search_word = new RegExp(`${req.query.q}`, 'ig')
        let all_jobs = JSON.parse(data)
        search_result = all_jobs.filter(item => search_word.test(item.title))
        res.json(search_result);
    });
});

app.post('/post-job', function (req, res) {
    if(req.body.salary && req.body.title && req.body.body && req.body.role){
        fs.readFile('./json_db.json','utf-8', function(err, data) {
            if (err) return console.error(err);
            let all_jobs = JSON.parse(data)
            all_jobs.push(req.body)
            writeAllJobs = JSON.stringify(all_jobs, null, 4)
            fs.writeFile('./json_db.json', writeAllJobs, function(err) {
                if (err) return console.error(err);
                resJson = {success: "You created the job successfully", data: req.body}
                res.send(resJson);
            });
        });
      }
    else{
        resJson = {failure: "Your data must contain salary, role, body, title"}
        res.send(resJson);
    }
});

app.get('/all-jobs', function (req, res) {
    fs.readFile('./json_db.json','utf-8', function(err, data) {
        if (err) return console.error(err);
        let all_jobs = JSON.parse(data)
        res.send(all_jobs);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
