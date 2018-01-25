import React from 'react';

import Card from './components/Card';
import NavBar from './containers/NavBar';
import NewBugsSection from './containers/NewBugsSection';
import SeveritySection from './containers/SeveritySection';
import LinearitySection from './containers/LinearitySection';

class App extends React.Component {
  render() {
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
              <LinearitySection bugsOpen={[1, 2, 3]} bugsClosed={[1, 2, 3]} averageTime={[1, 2, 3]}/>
            </div>
            <div className="row mt-3">
              <NewBugsSection/>
              <SeveritySection data={[8, 7, 2]}/>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
