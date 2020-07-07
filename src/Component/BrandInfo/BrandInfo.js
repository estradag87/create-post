import React from "react";

import "./BrandInfo.css";

class BrandInfo extends React.Component {
  render() {
    return (
      <div className="App">
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="palabra de busqueda"
            name="palabra de busqueda"
            wordSearch={this.props.wordSearch}
            onChange={this.props.onSearch}
          />

          <input type="submit" value="Buscar" />
        </form>
      </div>
    );
  }
}

export default BrandInfo;
