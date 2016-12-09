const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {
    let joe; // instances of a user

    beforeEach(() => {
        joe = new User({name: 'Joe'});
        joe.save()
            .then(() => done());
    });

    it('Finds all users with the name of Joe', () => {

    });
});