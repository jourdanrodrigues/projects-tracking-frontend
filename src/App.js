import React, {Component} from 'react';
import {Bar, Doughnut} from 'react-chartjs-2';

import Card from './components/Card';
import NavBar from './containers/NavBar';

function _getLinearityData() {
  let bugsOpenBackgroundColor = 'rgba(75, 192, 192, 0.2)';
  let bugsClosedBackgroundColor = 'rgba(153, 102, 255, 0.2)';
  return {
    labels: ['W1', 'W2', 'W3'],
    datasets: [{
      label: 'Bugs open',
      data: [1, 2, 3],
      backgroundColor: [
        bugsOpenBackgroundColor,
        bugsOpenBackgroundColor,
        bugsOpenBackgroundColor,
      ]
    }, {
      label: 'Bugs closed',
      data: [1, 2, 3],
      backgroundColor: [
        bugsClosedBackgroundColor,
        bugsClosedBackgroundColor,
        bugsClosedBackgroundColor,
      ]
    }, {
      label: 'Average time',
      data: [1, 2, 3],
      type: 'line',
      backgroundColor: [
        'rgba(255, 206, 86, 0.2)',
      ]
    }],
  }
}

function _getSeverityData() {
  return {
    datasets: [{
      label: 'Severity',
      data: [8, 7, 2],
      backgroundColor: [
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ]
    }],
    labels: ['High', 'Medium', 'Low']
  }
}

class App extends Component {
  render() {
    let linearityData = _getLinearityData();
    let severityData = _getSeverityData();
    return (
      <div className="App">
        <NavBar/>
        <main role="main">
          <div className="container pt-5 mb-5">
            <div className="row">
              <div className="col-12">
                <h2 className="display-3">Week #number</h2>
              </div>
            </div>
            <div className="row">
              <Card title="Some days" subtitle="Average time last week" primary={true}/>
              <Card title="Some tasks" subtitle="Bugs within current sprint"/>
              <Card title="Some closed" subtitle="Bugs solved this week"/>
              <Card title="Some assigned" subtitle="Tasks assigned to engineers"/>
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">Linearity</div>
                  <div className="card-body">
                    <div className="feature-chart feature-chart__right">
                      <Bar data={linearityData} height={150} width={300}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4">
                <div className="card">
                  <div className="card-header">New bugs this week</div>
                  <div className="card-body">
                    <ul>
                      <li className="mb-2">Task 1</li>
                      <li className="mb-2">Task 2</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-8">
                <div className="card">
                  <div className="card-header">Severity distribution</div>
                  <div className="card-body">
                    <Doughnut data={severityData} height={130} width={170}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
