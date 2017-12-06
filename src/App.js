import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Header from './components/Header';
import Footer from './components/Footer';
import AddBlogs from './components/AddBlogs';
import Blogs from './components/Blogs';



import './App.css';

class App extends Component {
    constructor(props){
    super(props);
    this.state ={
      post: [
        {
          title: "",
          content: ""
        }
      ]
    }
    this.handleTitle = this.handleTitle.bind(this);
    this.handleContent = this.handleContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event){
    this.setState({
      title: event.target.value
    })
  }

  handleContent(event){
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault();

    let newPost = {
      title: this.state.title,
      content: this.state.content
    }
    console.log(newPost)
    // // let post = this.state.post.push(newPost)
    // this.setState((prevState) => {
    //     post: prevState.post.concat(newPost)
    // });
    let updatedPostList = Object.assign([], this.state.post)
    updatedPostList.push(newPost)
    this.setState({
      post: updatedPostList
    })
    console.log(this.state.post)

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Draggable>
          <h1>Hello blog</h1>
        </Draggable>
        <AddBlogs handleSubmit={this.handleSubmit} handleTitle={this.handleTitle} handleContent ={this.handleContent} title={this.state.post.title} content={this.state.post.content}/>
        <Blogs post={this.state.post}/>
        <Footer />
      </div>

    );
  }
}

export default App;
