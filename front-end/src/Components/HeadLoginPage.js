import React from "react"
import { Link } from "react-router-dom"
import "./HeadLoginPage.css"
import "./HeadNavBar.css"

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

export default function HeadLoginPage() {
  return (
    <div>
        <> {HeadNavBar()} </>
        <div>
    <div id="bg">
      <div class="login-page">
      <div class="login-head">Welcome</div>
      <div class="form">
      <form>
        
  <div class="form-field">
    <input class="effect" type="email" placeholder="Email / Username" required/>
    <span class="focus-border"><i></i>
    </span>
  </div>
  
  <div class="form-field">
    <input class="effect" type="password" placeholder="Password" required/>                         
    <span class="focus-border"><i></i>
    </span>
  </div>
  
  <div class="form-field">
    <button class="btn" type="submit">Log in</button>
  </div>
</form>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}