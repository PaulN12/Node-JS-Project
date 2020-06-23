const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

//POST REquest to Register
router.post('/register', (req, res) => {
	const {name, email, password, password2} = req.body;
	let errors = []
	
	//Check required fields
	if(!name ||	!email || !password || password2){
		errors.push({msg :'Please fill in all fields'});
	}
	
	//Check if passwords match
	if(password != password2){
		errors.push({msg: 'Passowrds do not match'});
	}
	
	//Check if pass length
	if(password.length <6 ){
		errors.push({msg: 'Password should be at least 6 characters'});
	}
	
	if(errors.length > 0){
		res.render('register', {
			errors,
			name,
			email,
			password,
			password2
		});
	} else {
		res.send('pass');
	}
});

module.exports = User;