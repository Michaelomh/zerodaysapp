import React, { Component } from 'react';

class TimePanel extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentTime: ''
      };
    }

    getTime() {
        let time = new Date();
        console.log(time);
        this.setState({
            currentTime: time + ""
          });
    }

    componentWillMount= () => {
        this.getTime();
        console.log("componenet mounted");
    }

    render() {
        return (
            <div className="timePanel-root" >
                Current time now: {this.state.currentTime}
            </div>
        );
    }
}

export default TimePanel;