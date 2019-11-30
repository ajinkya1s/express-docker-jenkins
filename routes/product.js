var express =  require("express");
var router =  express();
var mysql = require("mysql");

var connection =  mysql.createConnection({
    host: "172.17.0.1" ,
    database:"myapp_db",
    user : "root",
    password:"manager",
	port:9099
});
connection.connect();
router.use(express.json());

router.get("/",(request, response)=>{
    var queryText = "select * from product";
    
    connection.query(queryText,(err, result)=>{
        if(err==null)
            {
                response.send(JSON.stringify(result));
            }
            else{
                response.send(JSON.stringify(err));
            }
    });
});


router.post("/",(request, response)=>{
   
            var No = request.body.No;
            var Name = request.body.Name;
            var Age = request.body.Age;

            var queryText = `insert into product (title,description,price) values('${title}', '${description}', ${price})`;
            connection.query(queryText,(err, result)=>{
            if(err==null)
                {
                    response.send(JSON.stringify(result));
                }
                else{
                    response.send(JSON.stringify(err));
                }
        });
  
});


module.exports = router;