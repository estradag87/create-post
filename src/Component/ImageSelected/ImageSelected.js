import React from "react";

import "./ImageSelected.scss";
import { IMAGES } from "../../Const/faceDB";
import { Form, Row, Col } from "react-bootstrap";

class ImageSelected extends React.Component {
  render() {
    const imageDisplay = this.props.imagePost;
    return (
      <div>
        <div className="postDesign">
          {IMAGES.filter((image) => image.image === imageDisplay).map(
            (image) => (
              <div className="cropSelected">
                <img
                  className={`photos ${
                    image.width < image.height
                      ? "verticalPhotoSelected"
                      : "horizontalPhotoSelected"
                  }`}
                  src={imageDisplay}
                />
              </div>
            )
          )}
          <p className="textDisplay">{this.props.text}</p>
          <img className={this.props.logoLocation} src={this.props.logo} />
        </div>
        <Form>
          <Form.Group>
            <fieldset>
              <Form.Group as={Row}>
                <Form.Label as="legend" column sm={2}>
                  Ubica tu logo
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Arriba"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                    value="logoDisplayTop"
                    onClick={this.props.onLogoLocation}
                  />
                  <Form.Check
                    type="radio"
                    label="Mitad"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                    value="logoDisplayMiddle"
                    onClick={this.props.onLogoLocation}
                  />
                  <Form.Check
                    type="radio"
                    label="Abajo"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                    value="logoDisplayBottom"
                    onClick={this.props.onLogoLocation}
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form.Group>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Tamaño del logo</Form.Label>
            <Form.Control type="range" onClick={this.props.onLogoSize} />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ImageSelected;
