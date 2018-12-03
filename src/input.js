import React, { Component } from 'react';
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
          }
    }
    handelchange=(event)=>{
        this.setState({keyword:event.target.value})
    }
    render() { 
        return (<div className='header-app'> 
        <h1>logo</h1>
        <input type='text'  onChange={this.handelchange} />
        {this.state.keyword}
        </div>  );
    }
}
 
export default Input;