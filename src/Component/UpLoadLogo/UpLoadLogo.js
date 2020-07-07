import React from "react";

import "./UpLoadLogo.css";
import Form from "react-bootstrap/Form";

class UpLoadLogo extends React.Component {
  render() {
    return (
      <div className="App">
        <Form>
          <Form.Group>
            <Form.File
              id="exampleFormControlFile1"
              label="Adjunta tu logo en PNG"
              accept="image/png"
              onChange={this.props.onUpLoad}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default UpLoadLogo;
