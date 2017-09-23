const mongoose = require("mongoose");

//Category Schema
const categorySchema = mongoose.Schema({
  title:{
    type: String
  },
  description: {
    type: String
  }
});

const Category = module.exports = mongoose.model('Category', categorySchema);

//Get Categories
 module.exports.getCategories = (callback, limit) => {
   Category.find(callback).limit(limit).sort([["title", "ascending"]])
 };

//Add Categories
module.exports.addCategory = (category, callback) =>{
  Category.create(category, callback);
};

//Get Single Category by ID
module.exports.getCategoryById = (id, callback) => {
  Category.findById(id, callback);
};

//Update Category
module.exports.updateCategory = (query, update, options, callback) => {
  Category.findOneAndUpdate(query, update, options, callback);
};

//Remove Category
module.exports.removeCategory = (query, callback) => {
  Category.remove(query, callback);
};
