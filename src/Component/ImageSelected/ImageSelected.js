import React from "react";

import "./ImageSelected.css";
import { IMAGES } from "../../Const/faceDB";

class ImageSelected extends React.Component {
  render() {
    const imageDisplay = this.props.imagePost;
    return (
      <div className="postDesign">
        {IMAGES.filter(function (image) {
          return image.image === imageDisplay;
        }).map(function (image) {
          return (
            <div className="cropSelected">
              <img
                className={`photos ${
                  image.width < image.height
                    ? "verticalPhoto"
                    : "horizontalPhoto"
                }`}
                src={imageDisplay}
              />
            </div>
          );
        })}
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default ImageSelected;

{
  /* {this.props.list.filter(function (user) { // filter first for friends
            return user.friend === true // returns a new array
          }).map(function (user) {  // map the new array to list items
            return <li key={user.name}>{user.name}</li> // don't forget unique key for each item
          })} */
}
