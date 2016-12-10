const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', () => {
   let joe;

   beforeEach((done) => {
    joe = new User({ name: 'Joe'})
    joe.save()
       .then(() => done());
   });

   it('model instance remove', (done) => {
        joe.remove()
            .then(() => User.findOne({ name: 'Joe' }))
            .then((user) => {
                assert(user === null);
                done();
            });
   });

   it('class method remove', (done) => {
       //remove a bunch of records with the same given criteria
       User.remove({ name: 'Joe' })
           .then(() => User.findOne({ name: 'Joe' }))
           .then((user) => {
               assert(user === null);
               done();
           });
   });

   it('class method findAndRemove', () => {

   });

   it('class method findByIdAndRemove', () => {

   });
});