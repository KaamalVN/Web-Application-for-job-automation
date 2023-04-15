import "./HeadAssign.css"
import React, { Component } from 'react'; 
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
class HeadAssign extends Component {
	constructor (props) {  
		super(props)  
		this.state = {  
		  startDate: new Date()  
		};  
		this.handleChange = this.handleChange.bind(this);  
		this.onFormSubmit = this.onFormSubmit.bind(this);  
	  }  
	  
	  handleChange(date) {  
		this.setState({  
		  startDate: date  
		})  
	  }  
	  
	  onFormSubmit(e) {  
		e.preventDefault();  
		console.log(this.state.startDate)  
	  }
  render() {
    return (
    <div class="container-info">
			<form class="info-form">
				<span class="info-form-title">Assign Work</span>

				<div class="input100-select">
					<span class="label-input100">Job code</span>
					<div class="input100 form-field">
					<input class="effect" type="text" placeholder="Job code" disabled/>
					<span class="focus-border"><i></i>
    					</span>
    					</div>
				</div>
				<div class="input100-select">
					<span class="label-input100">Initiated by</span>
					<div class="input100 form-field">
					<input class="effect" type="text" placeholder="Name" disabled/>
					<span class="focus-border"><i></i>
    					</span>
    					</div>
				</div>
				<div class="input100-select">
					<span class="label-input100">Enter Due Date</span>
					<div class="input100 form-field">
					<input class="effect" type="date" placeholder="" />
					<span class="focus-border"><i></i>
    					</span>
    					</div>
				</div>		
	  <div class="dummy">
	  <div class="form-field">
      <button class="btn" type="Assign">Assign</button>
      </div>
	  </div>
		</form>
		</div>
		
		
    );
  }
}
export default HeadAssign
