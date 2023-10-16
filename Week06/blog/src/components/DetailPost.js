import React from "react";
import { withRouter } from "react-router";
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
        <h2> {this.state.post.title} </h2>
        <p>{this.state.post.content}</p>
        <h4>Comments:</h4>
        {this.state.post.comments &&
          this.state.post.comments.map((item, index) => {
            return (
              <div className="comment-content">
                <span>{item.author}</span> - <span>{item.description}</span>{" "}
              </div>
            );
          })}

        <button className="btn-back" onClick={() => this.handleBackButton()}>
          Back
        </button>
      </div>
    );
  }
}
export default withRouter(DetailPost);
