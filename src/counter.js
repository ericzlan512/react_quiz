import React, {Component} from 'react';

class Counter extends Component {
    // write your code...
    render() {
        return (
            <div className={'counter_text'}>
                <div className="counter counter_text">0</div>
                <button className="stop_timer">Stop Timer</button>
            </div>
        );
    }
}

export default Counter;
