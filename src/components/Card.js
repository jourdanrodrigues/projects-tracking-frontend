import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    let primaryStyle = this.props.primary ? 'text-white bg-info' : '';
    return (
      <div className="col-3">
        <div className={`card ${primaryStyle} p-2`}>
          <h2>{this.props.title}</h2>
          <small>{this.props.subtitle}</small>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  primary: PropTypes.bool,
};

export default Card;
