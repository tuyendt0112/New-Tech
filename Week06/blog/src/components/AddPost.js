import React from "react";

class AddPost extends React.Component {
  state = {
    id: "",
    title: "",
    content: "",
  };
  handleOnChangeTitle = (event) => {
    //console.log(event.target.value);
    this.setState({
      title: event.target.value,
    });
  };
  handleOnChangeContent = (event) => {
    //console.log(event.target.value);
    this.setState({
      content: event.target.value,
    });
  };
  handleAddPost = () => {
    if (!this.state.title) {
      return;
    }
    if (!this.state.content) {
      return;
    }
    let post = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
      content: this.state.content,
    };
    this.props.addNewPost(post);
    this.setState({
      id: "",
      title: "",
      content: "",
    });
  };
  render() {
    let { title } = this.state;
    let { content } = this.state;
    return (
      <div className="blog-child">
        <label>Title</label>
        <input
          className="add-title"
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <label>Content</label>
        <input
          className="add-content"
          type="text"
          value={content}
          onChange={(event) => this.handleOnChangeContent(event)}
        />
        <button
          type="button"
          className="btn-add"
          onClick={() => this.handleAddPost()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default AddPost;
