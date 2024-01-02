const fs = require('fs');
const http = require('http');
let homecontent ="";
let projectcontent = "";
let regiscontent ="";
fs.readFile("home.html", (err, home)=>{
    if(err) throw err;

    homecontent = home;
})

fs.readFile("project.html", (err, project)=>{
    if(err) throw err;

    projectcontent = project;
})
fs.readFile("registration.html", (err,regis)=>{
    if(err) throw err;
    regiscontent = regis;
})
http.createServer((request, response)=>{
    let url = request.url;
    response.writeHeader(200, {"Content-Type": "text/html"});
    switch(url){
        case "/project":
            response.write(projectcontent);
            response.end();
            break;
        case "/registration":
            response.write(regiscontent);
            response.end();
            break;
        default:
            response.write(homecontent);
            response.end();
    }
})
.listen(5000);