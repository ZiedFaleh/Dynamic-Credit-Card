import React, { Component } from 'react';
import logo from './images/world_c_background.jpg';
import logo2 from './images/e975bcbf3010e4600da8ebbe9ec3dcc5.png';
import logo3 from './images/s-l300.jpg';
import logo4 from './images/arrow_triangle_right_1238505.png'
const renderCardNumber = number => {
  let resultStr = ''
  for(let i =0; i < number.length; i += 4) {
    resultStr += number.slice(i, i + 4) + ' '
  }
  return (resultStr.trim().padStart(19, '*'))
}
const renderValidThru = number => {
  number = number.toString()
  return number.slice(0, 2) + '/' + number.slice(2)
}

class CreditCard extends Component
{
  constructor(props) {
    super(props);
    this.state = {
        company:'CREDIT CARD',
        num:'1234567891234567',
        Val:'1150',
        name:'Zied Faleh'
      }
    }
    handelchange1=(e1)=>{
      this.setState({company:e1.target.value})
  }
  handelchange2=(e2)=>{
    this.setState({num:e2.target.value})
}
handelchange3=(e3)=>{
  this.setState({Val:e3.target.value})
}
handelchange4=(e4)=>{
  this.setState({name:e4.target.value})
}
  render(){


 return  (
 <div className="full-prog">
 <header className="App-header">
          
    <img src={logo} className="backgroundpicture" alt="backgroundpicture" />
    <p className="title">
      {this.state.company.toUpperCase()}
    </p>
    <img src={logo2} className="puce" alt="puce" />
    <div className="card-info">
    <div className="user-info">
    <p className="cc-number">
      {renderCardNumber(this.state.num)}
    </p>
    <div className="validity">
    <p className="serie-number">
      5422
    </p>
    <div className="zone1">
    <p className="validity-txt">
      VALID<br/>THRU
    </p>
    <img src={logo4} className="arrow" alt="arrow" />
    <div className="zone2">
    <p className="validity-info">
      MONTH/YEAR
    </p>
    <p className="validity-date">
      {renderValidThru(this.state.Val)}
    </p>
    </div>
    </div>
    </div>
    <p className="cardholder">
      {this.state.name.toUpperCase()}
    </p>
    </div>
    <img src={logo3} className="cc-company" alt="cc-company" />
    </div>
  </header>
  <div className="inputs-area">
        <h1>Enter your Company Name</h1>
        <input type='text'  onChange={this.handelchange1} />
        <h1>Enter the CC number</h1>
        <input type="text" maxLength="16" onChange={this.handelchange2} />
        <h1>enter the date of issue</h1>
        <input type="text" maxLength="4"  onChange={this.handelchange3} />
        <h1>Enter the client full name</h1>
        <input type='text' maxLength="20" onChange={this.handelchange4} />
        </div>

  </div>
  
  
  )}
}
export default CreditCard