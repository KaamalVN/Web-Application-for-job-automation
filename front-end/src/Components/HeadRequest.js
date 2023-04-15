import "./HeadRequest.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component} from 'react'; 
import { Link } from "react-router-dom"
import Select from 'react-select';
//import {useEffect} from 'react';
import "./HeadNavBar.css"
const Reason = [
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
	constructor(){
		super();
		this.state ={
			Entity: [],
			Dept: [],
			choosed:'',
			other:'hide'
		};
	}
	selectChange(e){
		this.setState({choosed:e.target.value});
		this.setState({Dept: this.state.Entity.find(x => x.label === e.target.value).Dept});
		if(e.target.value==="Others"){
			this.setState({other:'visible'});
		}
		else{
			this.setState({other:'hide'});
		}
	}
	render(){
    return (
		<div>
        <> {HeadNavBar()} </>
        <div>
    <div className="container-info">
			<form className="info-form">
				<span className="span1 info-form-title">Request Access</span>

				<div className="input100-select">
					<span className="span1 label-input100">Job Code</span>
					<div className="input1001 form-fielder">
					<input className="effect" type="text" placeholder="Enter job code" required/>
					<span className="focus-border"><i></i>
    					</span>
    					</div>
				</div>
				<span class="span1 label-input100">Reason</span>
                <div className="col-md-6">
               <Select options={Reason} placeholder="Select Reason"/>
               </div> 

	<div className="dummy input100-select">
		<span className="span1 label-input100">Designation</span>
			<div className="input1001 form-fielder">
				<input className="effect" type="text" placeholder="Enter your designation" required/>
				<span className="focus-border"><i></i></span>
				</div>
	</div>
	  <div className="dummy">
	  <div className="form-fielder">
    <button className="btn" type="submit">Submit</button>
  </div></div>
			</form>
		</div>
		</div>
		</div>
    );
  }
}
export default HeadRequest;