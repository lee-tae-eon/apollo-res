import React, { Component } from "react";

class Link extends Component {
  render() {
    return (
      <div>
        <div>{this.props.link.name}</div>
        <div>{this.props.link.bgImag}</div>
        <div>{this.props.link.address}</div>
        <div>{this.props.link.owner}</div>
        <div>{this.props.link.category}</div>
      </div>
    );
  }
}

export default Link;
