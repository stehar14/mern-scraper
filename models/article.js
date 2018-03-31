const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  // `title` and 'body' must be of type String
    title: {
      type: String,
      required: true,
      unique: true
    },
    body: {
      type: String,
    },
    url: {
      type: String,
      required: true,
      unique: true
    },
    image: {
      type: String,
    },
    created: { 
      type: Date, 
      default: Date.now 
    },
    notes: [{
      type: Schema.Types.ObjectId,
      ref: "note"
    }]
  });

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
