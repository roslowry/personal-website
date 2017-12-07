const Sequelize = require('sequelize');
// const User = require('./User');
// const Application = require('./Application')
// const Posting = require('./Posting')
// const Company = require('./Company')
// const Education = require('./Education')
// const Experience = require('./Experience');
// const Skill = require('./Skill');
// const UserSkill = require('./UserSkill');

// const db = require('../PATH TO DB HERE');






//Associate application with user. User has zero to many applications.
// Application.belongsTo(User);
// User.hasMany(Application);
//
// //Associate posting with company. Company has zero to many postings.
// Posting.belongsTo(Company);
// Company.hasMany(Posting);
//
// //Associate application with posting. Posting has zero to many applications.
// Application.belongsTo(Posting);
// Posting.hasMany(Application);
// Education.belongsTo(User);
// Experience.belongsTo(User)
// User.hasMany(Education)
// User.hasMany(Experience)
// User.belongsToMany(Skill, {through: UserSkill})
// Skill.belongsToMany(User, {through: UserSkill})

module.exports = {/* INCLUDE ALL ASSOCIATIONS HERE*/ };


/*
A note about the associations/quick refresh:


/ One-to-one
Ownee.belongsTo(Owner)
Owner.hasONe(Ownee)
// in this case, Ownee has a foreign key for Owner, which will be ownerId

/*A_QUESTION I KEEP ASKING MYSELF:
- WHY NOT DO a double belongsTo, as in:

- X.belongsTo(Y);
-Y.belongsTo(X);

I think there's a reason, and the reason has to do with magic methods. When creating entities, X and Y will start off empty. Instances for x will not initally be associated to instances of y. In other words, even though -- to take the first one-to-one example up at the top -- Ownee will have a foreign key for Owner -- the foreign key of OwnerID will start off empty. It won't be populated with an actual ownerId until we use a magic method to associate it as such. When we do this -- I believe through Ownee.setOwner(X), or something like that, then this gives Ownee access to magic methods for information about Owner. Also, as long as we use Owner.hasOne(Ownee) -- not belongsTo --  Owner should have access to magic methods for information about Owner. The problem is that if we do belongsTo/belongsTo rather than belongsTo/hasOne, then we have to use the magic methods in both direction. Like if we were to associate one, we'd have to associate the other , as well. Owner.setOwnee(xx) and Ownee.setOwner(xx). This is the only way to ensure that both entities are aware fo the association, not just one. You'd have to go in both directions.
*/

/*

// Many-to-one
Ownee.belongsTo(Owner)
Owner.hasMany(Ownee)
// In this case, Ownee has a foreign key for owner, which will be ownerId


// Many-to-Many
One.belongsTo(Otther);
Other.belongsTo(One);
// In this case, both get a foreing key for the other.




*/
