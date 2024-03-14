const conn = require("./DATABASE");


exports.storing = (body) => {
    const sqlSelect="select * from employee where username=(?) AND password=(?);"
    const sql = "INSERT INTO employee (id,username,password) VALUES (?, ?, ?);"
    const {id,username,password} = body;
    
    conn.query(sqlSelect, [username,password], (err, results) => {
       
        if (results.length === 0 ){

            conn.query(sql, [id, username,password], (err, data) => {
                if (err) {
                    console.error("Error occurred while storing user data:", err);
                    return;
                }

                console.log("User data stored successfully:", data);
            });
        } else {
            console.error("useername already exists in the database");
            
        }

    })
};


