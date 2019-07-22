const User = require('./user');

class GitHub {
  user(name) {
    return new User(this, name);
  }
}

module.exports = GitHub;