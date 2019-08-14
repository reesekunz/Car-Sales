import React from "react";
import { connect } from "react-redux";
import { addFeature } from "../actions";

class AdditionalFeature extends React.Component {
  state = {
    newFeature: "",
  };

  addFeature = event => {
    event.preventDefault();
    // invokes addFeature action 
    this.props.addFeature(this.state.newFeature);
  };


  render() {
    return (
      <li>
        {/* Add an onClick that will let you add a feature to your car */}
        <button className="button" onClick={this.addFeature}>
          Add
        </button>
        {this.props.feature.name} (+{this.props.feature.price})
      </li>
    );
  }
}

const mapStateToProps = state => {
  return {
    features: state.features
  };
};

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature);
