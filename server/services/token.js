const jwt = require('jsonwebtoken');


class Token {
  static async generateToken(payload) {
    const { username, email, _id, password } = payload;
    const token = jwt.sign({
        _id,
        username,
        email,
        password
    }, process.env.JWT_SECRET, {
        expiresIn: '10h'
    });
    
    return token;
  }
}

module.exports = Token;