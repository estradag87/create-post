import React from "react";

import "./Text.css";

class Text extends React.Component {
  render() {
    return (
      <div className="Text">
        <form onSubmit={this.props.onSubmit}>
          <textarea maxlength="100" onChange={this.props.onText}>
            {this.props.text}
          </textarea>
        </form>
      </div>
    );
  }
}

export default Text;
