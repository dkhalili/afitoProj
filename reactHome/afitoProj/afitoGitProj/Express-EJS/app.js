var fs = require('fs');
var ejs = require('ejs');

var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log('listening on port 3000!')
}); 



var bodyParser = require('body-parser');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);
var methodOverride = require('method-override');
app.use(methodOverride('_method'));


app.use( express.static("Images"));
app.use( express.static("Styles"));


// const {Client} = require('pg');
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/afito';

// const client = new pg.Client(connectionString);
// client.connect();













//HomePage
app.get('/', function (req, res) {


 //    listingsQuery = format('SELECT * FROM listings;');
	// client.query(listingsQuery, function (err, result) {
	// if (err) {
 //  		console.log(err)
	// }
	// 	var template = fs.readFileSync("./views/index.html", 'utf8');
	// 	var html = ejs.render(template, {listings: result.rows[0]});
	// 	res.send(html);
	// })

	var html = fs.readFileSync("./views/index.html", 'utf8');
	res.send(html);
})


//Login
app.get('/login', function (req, res) {
	var html = fs.readFileSync("./views/usersNew.html", "utf8");
	res.send(html);
})


//Signup
app.get('/signup', function (req, res) {
})


//User Dashboard
app.get('/users/:id/dashboard', function (req, res) {
})


//View User Profile
app.get('/users/:id', function (req, res) {
	var id = req.params.id;

 //    userQuery = format('SELECT * FROM users WHERE user_id =' + id);
	// client.query(userQuery, function (err, result) {
	// if (err) {
 //  		console.log(err)
	// }
	// 	var template = fs.readFileSync("./views/user.html", 'utf8');
	// 	var html = ejs.render(template, {user: result.rows[0]});
	// 	res.send(html);
	// })
	
})


//Edit User Profile
app.get('/users/:id/edit', function (req, res) {
	var id = req.params.id;

 //    userQuery = format('SELECT * FROM users WHERE user_id =' + id);
	// client.query(userQuery, function (err, result) {
	// if (err) {
 //  		console.log(err)
	// }
	// 		var template = fs.readFileSync("./views/usersEdit.html", "utf8");
	// 	var html = ejs.render(template, {user: result.rows[0]});
	// 	res.send(html);
	// })

})


//New Listing
app.get('/listings/new', function (req, res) {
})


//View All Listings
app.get('/listings', function (req, res) {
})


//View Listing Profile
app.get('/listings/:id', function (req, res) {
})


//Edit Listing Profile
app.get('/listings/:id/edit', function (req, res) {
})





















/*API*/



/*Users API*/

//GET All Users
app.get('/api/users', function (req, res) {
})


//Get Single User
app.get('/api/users/:id', function (req, res) {
	var id = req.params.id;
})


//Create New User
app.post('/api/users', function (req, res) {
	var username = req.body.username;
	var password = req.body.password;
	var name = req.body.name;
    var email = req.body.email;
    
    
	// newUserQuery = format('INSERT INTO users (username, password, name, email) VALUES (?, ?, ?, ?);', username, password, name, email);
	// client.query(newUserQuery, function (err, result) {
	// if (err) {
 //  		console.log(err)
	// }
 //      res.send(result.rows[0]);
	// })

})


//Edit User
app.put('/api/users/:id', function (req, res) {
	var id = req.params.id;
	var username = req.body.username;
	var password = req.body.password;
	var name = req.body.name;
	var email = req.body.email;


	// updateUserQuery = format("UPDATE users SET username ="+username+", password="+password+", name="+name+", email="+email+" WHERE user_id =" +id);
	// client.query(updateUserQuery, function (err, result) {
	// if (err) {
 //  		console.log(err)
	// }
 //      res.send(result.rows[0]);
	// })
})


//Delete User
app.delete('/api/users/:id', function (req, res) {
	var id = req.params.id;
})



/*LISTINGS API*/

//Get All Listings
app.get('/api/listings', function (req, res) {
})


//Get Single Listing
app.get('/api/listings/:id', function (req, res) {
	var id = req.params.id;
})


//Create New Listing
app.post('/api/listings', function (req, res) {
})


//Edit Listing
app.put('/api/listings/:id', function (req, res) {
	var id = req.params.id;
})


//Delete Listing
app.delete('/api/listings/:id', function (req, res) {
	var id = req.params.id;
})


































