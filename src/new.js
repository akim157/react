import React, { PropTypes, Component } from 'react';

export default class NewComponent extends Component {

    constructor(props) {
        super(props);
    }

    // componentWillMount(){
    //     console.log('componentWillMount');
    // }
    //
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    //
    // componentWillUnmount(){
    //     console.log('componentWillUnmount');
    // }

    // renderItems(item, idx){
    //     return (
    //         <li key={ idx }> <b>{ item.text }</b> - { item.id} </li>
    //     );
    // }

    render(){
        return (
            <div>
                /* { this.props.array.map(this.renderItems.bind(this)) } */
                <h3 style={{color: 'blue'}}>New component</h3>
            </div>
        );
    }
}