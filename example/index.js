const GitHub = require('..');

(async () => {

  const github = new GitHub({
    client_id: '',
    client_secret: ''
  });

  const user = github.user('song940');
  const orgs = await user.orgs();

})();