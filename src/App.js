import React from 'react';

import Card from './components/Card';
import NavBar from './containers/NavBar';
import NewBugsSection from './containers/NewBugsSection';
import SeveritySection from './containers/SeveritySection';
import LinearitySection from './containers/LinearitySection';

import {fetchBugBoxData} from './apiCalls';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      newTasks: [],
      currentWeek: '-',
      severity: {
        highPriorityCount: 0,
        mediumPriorityCount: 0,
        lowPriorityCount: 0,
      },
      cards: {
        totalOpen: 0,
        totalClosed: 0,
        totalCurrent: 0,
        totalAssigned: 0,
        averageTime: 0,
      },
      linearity: {
        bugsOpen: [0, 0, 0],
        bugsClosed: [0, 0, 0],
        averageTime: [0, 0, 0],
        weeks: [0, 0, 0],
      },
    }
  }

  componentWillMount() {
    fetchBugBoxData().then(
      /**
       * @param {{
       * currentWeek, totalOpen, totalClosed, totalCurrent, totalAssigned,
       * averageTime, linearityBugsOpen, linearityBugsClosed, linearityAverageTime,
       * linearityWeeks, newTasks, highPriorities, mediumPriorities, lowPriorities
       * }} data
       */
      (data) => {
        this.setState({
          newTasks: data.newTasks,
          currentWeek: data.currentWeek,
          severity: {
            highPriorityCount: data.highPriorities,
            mediumPriorityCount: data.mediumPriorities,
            lowPriorityCount: data.lowPriorities,
          },
          cards: {
            totalOpen: data.totalOpen,
            totalClosed: data.totalClosed,
            totalCurrent: data.totalCurrent,
            totalAssigned: data.totalAssigned,
            averageTime: data.averageTime,
          },
          linearity: {
            bugsOpen: data.linearityBugsOpen,
            bugsClosed: data.linearityBugsClosed,
            averageTime: data.linearityAverageTime,
            weeks: data.linearityWeeks,
          },
        })
      }
    )
  }

  render() {
    const {cards, linearity, severity, newTasks, currentWeek} = this.state;
    return (
      <div className="App">
        <NavBar/>
        <main role="main">
          <div className="container pt-5 mb-5">
            <div className="row">
              <div className="col-12">
                <h2 className="display-3">Week {currentWeek}</h2>
              </div>
            </div>
            <div className="row">
              <Card title={`${cards.averageTime} days`} subtitle="Average time last week" primary={true}/>
              <Card title={`${cards.totalCurrent} tasks`} subtitle="Bugs within current sprint"/>
              <Card title={`${cards.totalClosed} closed`} subtitle="Bugs solved this week"/>
              <Card title={`${cards.totalAssigned} assigned`} subtitle="Tasks assigned to engineers"/>
            </div>
            <div className="row mt-3">
              <LinearitySection bugsOpen={linearity.bugsOpen}
                                bugsClosed={linearity.bugsClosed}
                                averageTime={linearity.averageTime}/>
            </div>
            <div className="row mt-3">
              <NewBugsSection newTasks={newTasks}/>
              <SeveritySection highPriorityCount={severity.highPriorityCount}
                               mediumPriorityCount={severity.mediumPriorityCount}
                               lowPriorityCount={severity.lowPriorityCount}/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
