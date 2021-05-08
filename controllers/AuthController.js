const Users = require('../models/users');
const Response = require('../services/responses');
const Token = require('../services/token');

class AuthController {
  static async signup (req, res) {

    const {username, email, password, confirmPass} = req.body;
    if (!username || !email || !password || !confirmPass) {
      return Response(res).error(
          400,
          'validationError',
          'username, email, password and confirmPass must be provided'
      )
    } else if (username && email  && password) {
        if (password !== confirmPass) {
          return Response(res).error(
            400,
            'validationError',
            'password and confirmPassw must be the same', 
          );
        }

        let userExists = await Users.findOne({email: email}).then((user) => user);
        if (userExists) {
          return Response(res).error(
            400,
            'creationError',
            'User already exists'
          )
        }
    
        const userData = {
          username, 
          email,
          password
        }
    
        const user = new Users(userData);
        user.save();

        Response(res).success(
          'Registration succesfull',
          userData,
          200
        )   
      } else return Response(res).error(
          500,
          'creationError',
          'Failed to create account'
        )
  }

  static async login(req, res) {

    req.user = req.body;
    const { email} = req.user;
    const user = await Users.findOne({email: email}).then((user) => user);
    
    if (user) {
      if (user.password === req.user.password) {
        //Generates token for login
        const token = await Token.generateToken(user);

        //Binds user to token
        user.token = token;
        user.save(); 

        return Response(res).success(
          'Login successful',
          {token: user.token},
          200
        )
      } else if (user.password !== req.user.password) {
          return Response(res).error(
            400,
            'validationError',
            'Incorrect password'
          )
        }
    } 

    return Response(res).error(
      400,
      'validationError',
      'User does not exist'
    )
  }
}

module.exports = AuthController;