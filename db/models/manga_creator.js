'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const MangaCreator = db.define('manga_creator', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    jp_first_name: {
        type: Sequelize.STRING,
    },
    jp_last_name: {
        type: Sequelize.STRING,
    },
    birthday: {
        type: Sequelize.DATEONLY,
    },
    website: {
        type: Sequelize.STRING, 
    }
})

module.exports = MangaCreator