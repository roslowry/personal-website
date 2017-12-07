const db = require('../');
const Locale = require('./locale')

module.exports = db.define('organization', {
  name: {
    type: Sequelize.STRNG
  },
  photoUrl: {
    type: Sequelize.STRING
  },
  sector: {
    type: Sequelize.ENUM("Environment", "Education", "Homelessness", "Global_Affairs", "Animal_Welfare", "Civic_Engagement", "Arts_and_Culture")
  },
  description: {
    type: Sequelize.TEXT
  },
  website: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  {
    defaultScope: {
      include: [Locale]
    }
  }
})
