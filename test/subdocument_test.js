const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments', () => {
  it('can create subdocument', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: [{title: 'Hello World'}]
    });

    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        assert(user.posts[0].title === 'Hello World');
        done();
      });
  });

  it('Can add subdocuments to an existing record', (done) => {
    const joe = new User({
      name: 'Joe',
      posts: []
    });

    joe.save()
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        user.posts.push({title: 'New Post'});
        return user.save();
      })
      .then(() => User.findOne({name: 'Joe'}))
      .then((user) => {
        assert(user.posts[0].title === 'New Post');
        done();
      });

  });
});