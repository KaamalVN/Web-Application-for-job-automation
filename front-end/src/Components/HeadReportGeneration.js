import React,{useState} from 'react'
import { Link } from "react-router-dom"
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import "./HeadReportGeneration.css"
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
function HeadReportGeneration() {

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile]=useState(null);

  // pdf file error state
  const [pdfError, setPdfError]=useState('');


  // handle file onChange event
  const allowedFiles = ['application/pdf'];
  const handleFile = (e) =>{
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    if(selectedFile){
      if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend=(e)=>{
          setPdfError('');
          setPdfFile(e.target.result);
        }
      }
      else{
        setPdfError('Not a valid pdf: Please select only PDF');
        setPdfFile('');
      }
    }
    else{
      console.log('please select a PDF');
    }
  }

  return (
    <div>
        <> {HeadNavBar()} </>
        <div><div  class="position">
                <div class="center"></div>
        <div class="span"></div>
    <div className="container">

        <form>

          <label><h5>Generate Report</h5></label>
          <br></br>
  <div class="field1">
    <input type="date" placeholder="Enter access date" required/>
  </div>
  <div class="field">
    <button class="btn" type="submit">Submit</button>
  </div>
          <input type='file' className="form-control"
            onChange={handleFile}></input>

          {pdfError && <span className='text-danger'>{pdfError}</span>}

        </form>

        <h5>View PDF</h5>
        <div className="viewer">

          {pdfFile && (
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <Viewer fileUrl={pdfFile}
                plugins={[defaultLayoutPluginInstance]}></Viewer>
            </Worker>
          )}

          {!pdfFile && <>No file is selected yet</>}

        </div>
        </div>
        </div>
        </div>
        </div>

  );
}

export default HeadReportGeneration;