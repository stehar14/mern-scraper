import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
// import Scrape from "../../../utils/scrape.js";
import { Link } from "react-router-dom";
// import { Input, TextArea, FormBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    articles: [],
    title: "",
    body: "",
    url: "",
    image: ""
  };

  componentDidMount() {
    this.loadArticles();
    // this.scrapeArticles();
  }

  // scrapeArticles = () => {
  //   Scrape();
  // }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data, title: "", body: "", url: "", image: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  
    API.saveArticle({
      title: this.state.title,
      body: this.state.body,
      url: this.state.url,
      image: this.state.image
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };
}

export default Articles;
