import React from 'react';
import PropTypes from 'prop-types';
import {Doughnut} from 'react-chartjs-2';

class SeveritySection extends React.Component {
  render() {
    const doughnutData = {
      datasets: [{
        label: 'Severity',
        data: [
          this.props.highPriorityCount,
          this.props.mediumPriorityCount,
          this.props.lowPriorityCount,
        ],
        backgroundColor: [
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ]
      }],
      labels: ['High', 'Medium', 'Low']
    };
    return (
      <div className="col-8">
        <div className="card">
          <div className="card-header">Severity distribution</div>
          <div className="card-body">
            <Doughnut data={doughnutData} height={130} width={170}/>
          </div>
        </div>
      </div>
    )
  }
}

SeveritySection.propTypes = {
  highPriorityCount: PropTypes.number,
  mediumPriorityCount: PropTypes.number,
  lowPriorityCount: PropTypes.number,
};

export default SeveritySection;
