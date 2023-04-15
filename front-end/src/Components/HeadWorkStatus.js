import React,{Component} from "react"
import { Link } from "react-router-dom"
import "./HeadWorkStatus.css"
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
  class HeadWorkStatus extends Component{
      render(){
    return (
        <div>
        <> {HeadNavBar()} </>
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
                        <td><label class="completed">Completed</label></td>
                    </tr>
                    <tr>
                        <td class="serial">2.</td>
                        <td>28/6/2022</td>
                        <td>22VID001</td>
                        <td>10/7/2022</td>
                        <td>Function video editing</td>
                        <td><label class="assigned">Assigned</label></td>
                    </tr>
                    <tr>
                        <td  class="serial">3.</td>
                        <td>30/6/2022</td>
                        <td>22DOC001</td>
                        <td>13/7/2022</td>
                        <td>Certificate</td>
                        <td><label class="submitted">Submitted</label></td>
                    </tr>
                    <tr>
                        <td class="serial">1.</td>
                        <td>1/7/2022</td>
                        <td>22MUL001</td>
                        <td>15/7/2022</td>
                        <td>Multimedia design</td>
                        <td><label class="completed">Completed</label></td>
                    </tr>
                    <tr>
                        <td class="serial">2.</td>
                        <td>28/6/2022</td>
                        <td>22VID001</td>
                        <td>10/7/2022</td>
                        <td>Function video editing</td>
                        <td><label class="assigned">Assigned</label></td>
                    </tr>
                    <tr>
                        <td  class="serial">3.</td>
                        <td>30/6/2022</td>
                        <td>22DOC001</td>
                        <td>13/7/2022</td>
                        <td>Certificate</td>
                        <td><label class="submitted">Submitted</label></td>
                    </tr>
                    <tr>
                        <td class="serial">1.</td>
                        <td>1/7/2022</td>
                        <td>22MUL001</td>
                        <td>15/7/2022</td>
                        <td>Multimedia design</td>
                        <td><label class="completed">Completed</label></td>
                    </tr>
                    <tr>
                        <td class="serial">2.</td>
                        <td>28/6/2022</td>
                        <td>22VID001</td>
                        <td>10/7/2022</td>
                        <td>Function video editing</td>
                        <td><label class="assigned">Assigned</label></td>
                    </tr>
                    <tr>
                        <td  class="serial">3.</td>
                        <td>30/6/2022</td>
                        <td>22DOC001</td>
                        <td>13/7/2022</td>
                        <td>Certificate</td>
                        <td><label class="submitted">Submitted</label></td>
                    </tr>
                    <tr>
                        <td class="serial">1.</td>
                        <td>1/7/2022</td>
                        <td>22MUL001</td>
                        <td>15/7/2022</td>
                        <td>Multimedia design</td>
                        <td><label class="completed">Completed</label></td>
                    </tr>
                    <tr>
                        <td class="serial">2.</td>
                        <td>28/6/2022</td>
                        <td>22VID001</td>
                        <td>10/7/2022</td>
                        <td>Function video editing</td>
                        <td><label class="assigned">Assigned</label></td>
                    </tr>
                    <tr>
                        <td  class="serial">3.</td>
                        <td>30/6/2022</td>
                        <td>22DOC001</td>
                        <td>13/7/2022</td>
                        <td>Certificate</td>
                        <td><label class="submitted">Submitted</label></td>
                    </tr>
                    <tr>
                        <td class="serial">1.</td>
                        <td>1/7/2022</td>
                        <td>22MUL001</td>
                        <td>15/7/2022</td>
                        <td>Multimedia design</td>
                        <td><label class="completed">Completed</label></td>
                    </tr>
                    <tr>
                        <td class="serial">2.</td>
                        <td>28/6/2022</td>
                        <td>22VID001</td>
                        <td>10/7/2022</td>
                        <td>Function video editing</td>
                        <td><label class="assigned">Assigned</label></td>
                    </tr>
                    <tr>
                        <td  class="serial">3.</td>
                        <td>30/6/2022</td>
                        <td>22DOC001</td>
                        <td>13/7/2022</td>
                        <td>Certificate</td>
                        <td><label class="submitted">Submitted</label></td>
                    </tr>
  </tbody>
</table>
</div></div></div>
</div>

    );
      }
}
export default HeadWorkStatus;