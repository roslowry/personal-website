const db = require('../');

module.exports = db.define('initiative', {
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.STRING
  },
  photoUrl: {
    type: Sequelize.STRING
  }
}, {
  getterMethods: {
    upcoming() {
      let bool = Date.now() > this.eventData;
      this.setDataValue('upcoming', bool)
    }
  }
})
