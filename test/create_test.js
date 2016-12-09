const assert = require('assert');
const User = require('../src/user');

describe('Creating Records', () => {
    it('saves a user', (done) => {
        const joe = new User({ name: 'Joe' });

        joe.save()
            .then(() => {
                //has joe been saved to the database?
                assert(!joe.isNew);
                done();
            });
    });
});