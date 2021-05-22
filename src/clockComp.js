import React from 'react';

class ClockComp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    /*componentDidUpdate(){
        console.log('Component updated!');
    }**/

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick = () =>{
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div><b>Time:</b> {this.state.date.toLocaleTimeString()}</div>
        );
    }
}

export default ClockComp;