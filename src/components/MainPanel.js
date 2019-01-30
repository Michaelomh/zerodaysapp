import React, { Component } from 'react';
import TimePanel from './TimePanel';
import WeekPanel from './WeekPanel';

class MainPanel extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
    }

    render() {
        return (
            <div className="mainPanel-root" >
                <TimePanel />
                <WeekPanel />
            </div>

        );
    }
}

export default MainPanel;