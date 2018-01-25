import React from 'react';

class NewBugsSection extends React.Component {
  render() {
    return (
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
    )
  }
}

export default NewBugsSection;
