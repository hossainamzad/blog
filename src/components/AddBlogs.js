import React, { Component } from 'react';
class AddBlogs extends Component {
  render () {
    return (
        <div>
          <form onSubmit={this.props.handleSubmit}>

              Title:
              <textarea value={this.props.title} onChange={this.props.handleTitle } />
                Content:
              <input value={this.props.content} onChange={this.props.handleContent }/>
            <div>{this.props.title}: {this.props.content}</div>
            <input onClick={this.props.handleSubmit} type="submit" value="submit"/>
          </form>
        </div>
      )
  }
}
export default AddBlogs;
