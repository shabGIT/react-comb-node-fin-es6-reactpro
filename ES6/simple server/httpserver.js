const http=require("http")

const myserver=http.createServer((req ,res)=>{
    res.write("Welcom to Node Js ")
    res.end();
});

myserver.listen(2020)