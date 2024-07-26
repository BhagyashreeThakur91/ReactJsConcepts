import { Component } from "react";

class ClassBasedComponent extends Component {
    // componentDidMount
    // componentDidUpdate
    // componentWillUnmount

    componentDidMount() {
        console.log("This is called first time on page load");
        this.setState({
            showText : !this.state.showText,
            changeColor : !this.state.changeColor
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState, this.state);
        if(prevState && prevState.count !== this.state.count && this.state.count === 10){
            this.setState({
                ...this.state,
                changeCountStyle : true,
            });
        }
    }

    componentWillUnmount() {
        console.log("Component is getting unmounted!");
    }
    state = {
        showText : false,
        changeColor : false,
        count : 0,
        changeCountStyle : false,
    };

    handleClick = () => {
    const {showText, changeColor} = this.state;
        this.setState({
            showText : !showText,
            changeColor : !changeColor
        })
    }

    handleCount = () =>{
        this.setState({
            ...this.state,
            count : this.state.count + 1,
        })
    }

    render(){
        const {showText, changeColor, count, changeCountStyle} = this.state;
        return (
        <div>
            { showText
             ? <h4 style={{color: changeColor ? 'red' : black}}>Class based Component</h4> : null }
            <button onClick={this.handleClick}>Toggle Text</button>
            <button onClick={this.handleCount}>Increase Count Value</button>
            <h4 style={{color: changeCountStyle ? 'blue' : 'black', fontSize: changeCountStyle ? '30px' : '12px'}}>Count is : {count}</h4>
        </div>
        );
    }
}

export default ClassBasedComponent;