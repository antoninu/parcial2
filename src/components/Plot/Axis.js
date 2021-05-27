import React from "react";
import { select } from "d3";

class Axis extends React.Component {
  componentDidMount() {
    const node = this.refs[this.props.axis];
    select(node).call(this.props.scale);
  }

  render() {
    return (
      <>
        <g
          className="main axis date"
          transform={this.props.transform}
          ref={this.props.axis}
        />
        <text transform={this.props.transform}>{this.props.label}</text>
      </>
    );
  }
}

export default Axis;
