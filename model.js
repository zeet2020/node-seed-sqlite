
var Sequelize = require('sequelize');
var  sequelize = new Sequelize('database','username','null',{
    host:'localhost',
    dialect:'sqlite',
    pool: {
      max:5,
      min:0,
      idle:10000 
   },
   storage:'database.sqlite'
});
var Post = sequelize.define('post',{

   id:{
       type:Sequelize.INTEGER,
       autoIncrement: true,
       primaryKey: true
   },
   title:{
     type:Sequelize.STRING,
     field:'title'
   },
   content:{
     type:Sequelize.TEXT,
      field:'content'
   },
   tags:{
    type:Sequelize.STRING,
     field:'tags'
   },
},{
  tableName:'posts'

});




exports.Post = Post;
