import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);

