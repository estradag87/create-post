import React from "react";

import "./App.css";
import BrandInfo from "../BrandInfo/BrandInfo";
import DisplayImages from "../DisplayImages/DisplayImages";
import Text from "../Text/Text";
import ImageSelected from "../ImageSelected/ImageSelected";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordSearch: "",
      text: "",
      imagePost: "",
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleImageSelected = this.handleImageSelected.bind(this);
  }

  handleSearch(event) {
    this.setState({ wordSearch: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleText(event) {
    this.setState({ text: event.target.value });
  }

  handleImageSelected(image) {
    this.setState({ imagePost: image.image });
  }

  render() {
    return (
      <div className="App">
        <BrandInfo onSearch={this.handleSearch} onSubmit={this.handleSubmit} />
        <DisplayImages onSelect={this.handleImageSelected} />
        <Text onText={this.handleText} onSubmit={this.handleSubmit} />
        <ImageSelected
          imagePost={this.state.imagePost}
          text={this.state.text}
        />
      </div>
    );
  }
}

export default App;
