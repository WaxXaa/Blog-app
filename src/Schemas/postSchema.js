const sequelize = require('../Config/db')
const { DataTypes } = require('sequelize')
const User = require('./userSchema')
const Category = require('./categorySchema')
const Post = sequelize.define('Post', {
  PostId: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  Rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  Content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [1, 500]
    }
  },
  CreatedAt: DataTypes.BIGINT,
  UpdatedAt: DataTypes.BIGINT
}, { timestamps: false }
)
// Post.belongsTo(User)
Post.belongsTo(Category)

// const f = async () => await Post.sync({ force: true })
// f()
module.exports = Post
