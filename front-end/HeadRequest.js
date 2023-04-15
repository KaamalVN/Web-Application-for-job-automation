import "./HeadRequest.css"
import "./HeadNavBar.css"
import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom"
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css';

const Department = [
	{ label: "Wrong Dates"},
	{ label: "Wrong Expenses"},
	{ label: "Accidental Submission"},
	{ label: "Verification"},
	{ label: "Others"},
];
function HeadNavBar() {
	return (
		<div>
			<nav class="navbar"
		  style={{
			borderBottom: "solid 1px",
			paddingBottom: "1rem",
			position:"fixed",
		  }}>
	   <div class="logo">Sonaversity</div>
	   <ul class="nav-links">
		 <input type="checkbox" id="checkbox_toggle" />
		 <label for="checkbox_toggle" class="hamburger">&#9776;</label>
		 <div class="menu">
		 <Link style={{textDecoration: 'none'}} to="/"><li>Work Status</li></Link>
		   <Link style={{textDecoration: 'none'}} to="/HeadRequest"><li>Requestion</li></Link>
		   <Link style={{textDecoration: 'none'}} to="/HeadReportGeneration"><li>Report Generation</li></Link>
		   <Link style={{textDecoration: 'none'}} to="/HeadLoginPage"><li>Logout</li></Link>
		</div>
	   </ul>
	 </nav>
	</div>
	)
  }
class HeadRequest extends Component {
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
		<div>
        <> {HeadNavBar()} </>
        <div>
    <div class="container-info">
			<form class="info-form">
				<span class="info-form-title">Request Access</span>

				<div class="input100-select">
					<span class="label-input100">Job code</span>
					<div class="input100 form-field">
					<input class="effect" type="text" placeholder="Enter job code" required/>
					<span class="focus-border"><i></i>
    					</span>
    					</div>
				</div>
				<div class="input100-select">
					<span class="label-input100">Job code</span>
					<div class="input100 form-field">
					<input class="effect" type="text" placeholder="Enter job code" required/>
					<span class="focus-border"><i></i>
    					</span>
    					</div>
				</div>
				<span class="label-input100">Reason</span>
                <div className="col-md-6">
            <Select options={Department} placeholder="Select Reason"/>
          </div> 

	<div class="dummy input100-select">
		<span class="label-input100">Reason Explanation</span>
			<div class="input100 form-field">
				<input class="effect" type="text" placeholder="Enter your Explanation" required/>
				<span class="focus-border"><i></i></span>
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
    <button class="btn" type="submit">Submit</button>
  </div></div>
			</form>
		</div>
		</div>
</div>

		
		
    );
  }
}
export default HeadRequest
