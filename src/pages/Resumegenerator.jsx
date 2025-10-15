
import React from 'react'
import { IoMdDocument } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Resumegenerator() {
  return (
    <>
      <div className='container-fluid' >
        <h1 className='text-center mt-5'>Create a job-winning Rsume in minutes</h1>
        <div className='row mt-5'>
          <div className='col-1'></div>
          <div className='col-4 border shadow rounded p-5 text-center'>
            <IoMdDocument className='text-primary fs-1 mb-3'/>
            <h4>Add your Information</h4>
            <p>Add pre-writtern Examples to each section</p>
            <h5>Step 1</h5>
          </div>
          <div className='col-2'></div>
          <div className='col-4 border shadow rounded p-5 text-center'>
            <FaFileDownload className='text-primary fs-1 mb-3' />
            <h4>Download Your Resume</h4>
            <p>Download and Start Applying</p>
            <h5>Step 2</h5>
          </div>
          <div className='col-1'></div>
        </div>
        <div className='text-center m-2'>
        <Link to={"/form"} className='btn btn-success p-3'>Lets Start</Link>
      </div>

      </div>
    </>
  )
}

export default Resumegenerator