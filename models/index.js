const User = require('./User');
const Stash = require('./Stash');

User.hasMany(Stash, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Stash.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = { User, Stash };
