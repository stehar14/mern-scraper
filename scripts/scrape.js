// Require request and cheerio. This makes the scraping possible
const request = require("request");
const cheerio = require("cheerio");
const db = require("../models");

module.exports = function() {
  request('http://www.myrtlebeachonline.com/latest-news/', function(err, resp, html) {
    const $ = cheerio.load(html);
    $("article").each(function(i, element) {
      let results = {};
      results.title = $(element).children().children(".title").text().trim();
      results.url = $(element).children().children(".title").children("a").attr("href");
      if ($(element).find("img").attr("data-proxy-image") != null) {
        console.log($(element).find("img").attr());
        results.image = $(element).find("img").attr("data-proxy-image").replace("_80", "_320");
      } else {
        results.image = "/assets/images/placeholder.PNG";
      }
      results.body = $(element).children().children().remove().end().text().trim();        
        console.log("URL" + results.url);
      
      // let url = $(element).find("a").attr("href");
      // console.log(url);
      // console.log(title + "\n" + content);
      // results.url = url;
      const article = new db.Article(results);
      article.save(function(err, article) {
        if (err) {
          if (err.name === "BulkWriteError") {
            return console.log("Article exists in database, skipped.");
          } else {
            return console.error(err);
          }
        }
      })
    });
  })
}