import React from "react";
import { IMAGES } from "../../Const/faceDB";

import "./DisplayImages.css";

class DisplayImages extends React.Component {
  render() {
    return (
      <div className="a">
        {IMAGES.map((image) => (
          <div className="crop">
            <img
              className={`photos ${
                image.width < image.height ? "verticalPhoto" : "horizontalPhoto"
              }`}
              key={image}
              src={image.image}
              onClick={() => this.props.onSelect(image)}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayImages;
