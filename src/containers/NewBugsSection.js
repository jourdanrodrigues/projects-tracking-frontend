import React from 'react';
import PropTypes from 'prop-types';

class NewBugsSection extends React.Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <div className="card-header">New bugs this week</div>
          <div className="card-body">
            <ul>
              {this.props.newTasks.map((task, i) => (
                <li className="mb-2" key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

NewBugsSection.propTypes = {
  newTasks: PropTypes.arrayOf(PropTypes.string)
};

export default NewBugsSection;
