import React, { PropTypes, Component } from 'react';
import { Router, Route } from 'react-router';
import ReactDOM from 'react-dom';
import NewComponent from './new';

class App extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     text: '',
        //     timer: 0,
        //     // array: [
        //     //     {
        //     //         id: 1,
        //     //         text: 'item 1'
        //     //     },
        //     //     {
        //     //         id: 2,
        //     //         text: 'item 2'
        //     //     },
        //     //     {
        //     //         id: 3,
        //     //         text: 'item 3'
        //     //     },
        //     // ]
        // };
    }

    // componentWillMount(){
    //     setInterval(()=>{
    //         this.setState({ timer: this.state.timer+1 })
    //     },100);
    // }
    //
    // static propTypes = {
    //     btnText: PropTypes.string.isRequired,
    //     h1text: PropTypes.string.isRequired,
    //     newArray: PropTypes.array.isRequired
    // };
    //
    // static defaultProps = {
    //     btnText: 'defaule props text'
    // };
    //
    // btnOnClick(event){
    //     console.log('Clicked', event.target);
    // }
    //
    // inputOnChange(event){
    //     const text = event.target.value;
    //     this.setState({ text });
    // }

    render(){
        return (
            <div style={{backgroundColor: 'red'}} className="test">
                /*<h1>{ this.props.h1text }</h1>
                { this.state.timer < 50 ? <NewComponent text="hello from app" /> : null }
                <NewComponent text="hello from app1" array={ this.state.array } />
                <p>{ this.state.timer }</p>
                <h3>It's really working!</h3>
                <br />
                <input type="text" value={ this.state.text } onChange={ this.inputOnChange.bind(this) }/>
                <button onClick={this.btnOnClick}>{ this.props.btnText || 'Default text' }</button>*/
                <h1>App component</h1>
            </div>
        );
    }
}

ReactDOM.render(
    // <App btnText="click on me!" h1text="This is h1 text" newArray={[1,2,3]}/>,
    <Router>
        <Route path={'/'} component={ App } />
        <Route path={'new'} component={ NewComponent } />
    </Router>,
    document.getElementById('app')
);