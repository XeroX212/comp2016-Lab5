var express = require('express');
var router = express.Router();

// link to account
var Account = require('../models/account');
//GET users listin.
router.get('/', function(req, res) {
   // Retrieve all users
	Account.find(function (err, accounts) {
		// if we get an error
		if (err) {
			console.log(err);
			res.end(err);
		}
		else {
			// show the view and pass data into it (if we get data)
			res.render('users', {
				title: 'Users',
				users: accounts
			});
		}
	});
});
module.exports = router;