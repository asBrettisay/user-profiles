var users = [
  {
    name: 'Preston McNeil',
    password: 'password1',
    friends: ['Lindsey Mayer', 'Terri Ruff']
  },
  {
    name: 'Brett Caudill',
    password: 'p',
    friends: ['Preston McNeil', 'Ryan Rasmussen']
  },
  {
    name: 'Ryan Rasmussen',
    password: '$akgfl#',
    friends: ['Lindsey Mayer']
  },
  {
    name: 'Terri Ruff',
    password: 'hunter2',
    friends: ['Lindsey Mayer', 'Preston McNeil']
  },
  {
    name: 'Lindsey Mayer',
    password: '777mittens777',
    friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
  }
];

module.exports = {
  login: function(req, res, next) {
    var userFound = false;
    users.forEach(function(user) {
      if (req.body.name === user.name && req.body.password === user.password) {
        req.session.currentUser = user;
        userFound = true;
      }
    })
    res.send({userFound: userFound});
  },

  addFriend: function(req, res, next) {
    req.session.currentUser.friends.push(req.body.name)
    res.send();
  },

  update: function(req, res, next) {
    var updateSuccess = false;
    for (var i = 0; i < users.length; i++) {
      if (users[i].name === req.session.currentUser.name) {
        users[i] = req.body;
        updateSuccess = true;
      }
    }
    console.log(users);
    res.json(users);
  }
}
