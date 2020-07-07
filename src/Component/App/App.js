import React from "react";

import "./App.css";
import BrandInfo from "../BrandInfo/BrandInfo";
import DisplayImages from "../DisplayImages/DisplayImages";
import Text from "../Text/Text";
import ImageSelected from "../ImageSelected/ImageSelected";
import UpLoadLogo from "../UpLoadLogo/UpLoadLogo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      wordSearch: "",
      text: "",
      imagePost: "/Photos/5.jpg",
      logo: null,
      logoLocation: "logoDisplayBottom",
      logoSize: Number,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleImageSelected = this.handleImageSelected.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
    this.handleLogoLocation = this.handleLogoLocation.bind(this);
    this.handleLogoSize = this.handleLogoSize.bind(this);
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

  handleLogo(e) {
    e.preventDefault();
    var reader = new FileReader();
    reader.onload = () => this.setState({ logo: reader.result });
    reader.readAsDataURL(e.target.files[0]);
  }

  handleImageSelected(image) {
    this.setState({ imagePost: image.image });
  }

  handleLogoLocation(event) {
    this.setState({ logoLocation: event.target.value });
  }

  handleLogoSize(event) {
    this.setState({ logoSize: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <BrandInfo onSearch={this.handleSearch} onSubmit={this.handleSubmit} />
        <DisplayImages onSelect={this.handleImageSelected} />
        <Text onText={this.handleText} onSubmit={this.handleSubmit} />
        <UpLoadLogo onUpLoad={this.handleLogo} />
        <ImageSelected
          imagePost={this.state.imagePost}
          text={this.state.text}
          logo={this.state.logo}
          onLogoLocation={this.handleLogoLocation}
          logoLocation={this.state.logoLocation}
          onLogoSize={this.handleLogoSize}
          logoSize={this.state.logoSize}
        />
      </div>
    );
  }
}

export default App;
