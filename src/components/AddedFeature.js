import React from "react";

import { connect } from "react-redux";
import { deleteFeature } from "../actions";



// Getting features from reducer. 
const mapStateToProps = state => {
  console.log(state)
  return {
    features: state.features
  };
};
class AddedFeature extends React.Component {
deleteFeature = event => {
  event.preventDefault();
  // invokes addFeature action 
  this.props.deleteFeature(this.props.feature);
};
render() {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={this.deleteFeature}>
      Remove Feature</button>
      {this.props.feature}
    </li>
  );
  };
  };
// connect function is an HOC. returns a brand new component - copy of Added Feature with added functionality
// added functionality - state properties coming in on props (connecting it to redux store and bringing in pieces of state tree - eg. features - as props )
export default connect(
  mapStateToProps,
  { deleteFeature  }
)(AddedFeature);
