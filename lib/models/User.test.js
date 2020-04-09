const User = require('./User');

describe('User model', () => {
  it('has a required email', () => {
    const user = new User();
    const { errors } = user.validateSync();
    
    expect(errors.email.message).toEqual('Path `email` is required.');
  });

  it('has a required passwordHash', () => {
    const user = new User();
    const { errors } = user.validateSync();
    
    expect(errors.passwordHash.message).toEqual('Path `passwordHash` is required.');
  });
});
