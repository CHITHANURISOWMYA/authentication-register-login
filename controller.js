const con=require("./DATABASE");




const { storing } = require("./MODEL.JS");

function checkemail(username,password,callback) {
    const checkQuery = "SELECT * FROM employee WHERE username = ? AND password = ?";
    
    con.query(checkQuery, [username,password], (err, result) => {
        if (err) {
            console.error("Error occurred while checking email:", err);
            callback(err, null);
            console.log(result,"error")
        } else {
            callback(null, result);
            console.log(result,"Success")
        }
    });

}
exports.registeruser = (req, res) => {
    const userEmail = req.body.username;
    const password=req.body.password;

    checkemail(userEmail,password, (err, result) => {
        if (err) {
            res.send("Error occurred while checking email");
        } else {
            if (result.length > 0) {
                res.send("user is already exist");
            } else {
            storing(req.body);
            res.send("user is successfully registered and the data has been successfully stored in the database.");
            }
        }
    });
};




