import React from 'react';
import PropTypes from 'prop-types';
import {Bar} from 'react-chartjs-2';

class LinearitySection extends React.Component {
  render() {
    let bugsOpenBackgroundColor = 'rgba(75, 192, 192, 0.2)';
    let bugsClosedBackgroundColor = 'rgba(153, 102, 255, 0.2)';
    const barData = {
      labels: ['W1', 'W2', 'W3'],
      datasets: [{
        label: 'Bugs open',
        data: this.props.bugsOpen,
        backgroundColor: [
          bugsOpenBackgroundColor,
          bugsOpenBackgroundColor,
          bugsOpenBackgroundColor,
        ]
      }, {
        label: 'Bugs closed',
        data: this.props.bugsClosed,
        backgroundColor: [
          bugsClosedBackgroundColor,
          bugsClosedBackgroundColor,
          bugsClosedBackgroundColor,
        ]
      }, {
        label: 'Average time',
        data: this.props.averageTime,
        type: 'line',
        backgroundColor: [
          'rgba(255, 206, 86, 0.2)',
        ]
      }],
    };
    return (
      <div className="col-12">
        <div className="card">
          <div className="card-header">Linearity</div>
          <div className="card-body">
            <div className="feature-chart feature-chart__right">
              <Bar data={barData} height={150} width={300}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

LinearitySection.propTypes = {
  bugsOpen: PropTypes.arrayOf(PropTypes.number),
  bugsClosed: PropTypes.arrayOf(PropTypes.number),
  averageTime: PropTypes.arrayOf(PropTypes.number),
};

export default LinearitySection;
