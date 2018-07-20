import React ,{Component} from 'react';

class visibilityToggle extends Component {
    constructor(props){
        super(props);
        this.showOptionHandle = this.showOptionHandle.bind(this);
        this.state = {
            visiblitiy: false
        }
    }

    showOptionHandle() {
        this.setState((prevState)=> {
            return {
                visiblitiy: !prevState.visiblitiy
            };
        });
    }


    render() {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick = {this.showOptionHandle}>{this.state.visiblitiy? 'Hide options' : 'Show options'} </button>
            {this.state.visiblitiy && (
                <div> 
                <p>There some details may help you</p>
                </div>
            )}
            </div>
        );
    }
}

export default visibilityToggle;