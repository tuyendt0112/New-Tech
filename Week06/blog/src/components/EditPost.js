import React from "react";
import { withRouter } from "react-router";
import "../styles/listblog.scss";
class DetailPost extends React.Component {
  state = {
    post: {},
  };

  componentDidMount() {
    this.setState({ post: this.props.location.state }, () => {
      console.log(">>>>state", this.state);
    });
  }

  handleBackButton = () => {
    this.props.history.push("/");
  };
  render() {
    // console.log("check props >>>>", this.props);
    return (
      <div className="blog-child" key={this.state.post.id}>
        <input className="input-title" value={this.state.post.title} />
        <textarea className="input-content" value={this.state.post.content} />

        {this.state.post.comments &&
          this.state.post.comments.map((item, index) => {
            return (
              <div className="comment-content">
                <span>{item.author}</span> - <span>{item.description}</span>{" "}
              </div>
            );
          })}
        <p> Add comment:</p>

        <button className="btn-back" onClick={() => this.handleBackButton()}>
          Back
        </button>
      </div>
    );
  }
}
export default withRouter(DetailPost);
