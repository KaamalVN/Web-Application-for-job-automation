import React,{Component} from "react"
import { Link } from "react-router-dom"
import "./AdminWorkStatus.css"
import "./AdminNavBar.css"

function AdminNavBar() {
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
        </div>
       </ul>
     </nav>
    </div>
    )
  }
  class AdminWorkStatus extends Component{
      render(){
    return (
        <div>
        <> {AdminNavBar()} </>
        <div>
            <div  class="position">
                <div class="center">
            <table class="rtable">
                <thead>
                    <tr>
                        <th class="serial">S.No</th>
                        <th>Date Submitted</th>
                        <th>Job number</th>
                        <th>Due Date</th>
                        <th>Type of Job</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="serial">1.</td>
                        <td>1/7/2022</td>
                        <td>22MUL001</td>
                        <td>15/7/2022</td>
                        <td>Multimedia design</td>
                        <td><label class="completed">Requested</label></td>
                    </tr>
                    
  </tbody>
</table>
</div></div></div>
</div>

    );
      }
}
export default AdminWorkStatus;