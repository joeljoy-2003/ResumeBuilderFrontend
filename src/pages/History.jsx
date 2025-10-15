
import Box from '@mui/material/Box'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { getresumeAPI } from '../service/allAPI';
import { deleteresumeAPI } from '../service/allAPI';

function History() {
  const [userInput, setUserInput] = useState({

    professionaldata: {
      name: "",
      jobtitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: ""

    },
    educationdata: {
      course: "",
      college: "",
      university: "",
      year: ""
    },
    experience: {
      jobrole: "",
      company: "",
      joblocation: "",
      duration: ""
    },
    skill: [],
    summary: ""
  })
  const getresumeAPI = async () => {
    const result = await getresumeAPI()
    console.log(result);
    setUserInput(result.data)


  }
  console.log(userInput);
  

  const deleteresumeAPI = async (id) => {
    const result = await deleteresumeAPI(id)
    console.log(result);
    getresumeAPI()


  }




  useEffect(() => {
    getresumeAPI()
  }, [])

  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Download Resume History</h1>
        <Link to={"/"} style={{ marginTop: "-50px" }} className='float-end me-5'>Back</Link>
        <Box component="section" className='container-fluid'>
          <div className="row mt-5">

            {userInput?.length > 0 ?
              userInput?.map((item, index) => {
                <div className="col-md-4" key={index}>
                  <Paper elevation={3} sx={{ p: 2, textAlign: "center" }}>
                    <div className='d-flex align-items-center justify-content-center'>
                      <h6>Resume Builder:{index + 1}</h6>
                      <button onClick={{deleteresumeAPI}} className='btn btn-danger'>X</button>
                    </div>

                    <div className='mt-3 pt-3'>
                      <h2>{item?.professionaldata.name}</h2>
                      <h4>{item?.professionaldata.jobtitle}</h4>
                      <p><span>{item?.professionaldata.location}</span>|
                        <span>{item?.professionaldata.email}</span>|
                        <span>{item?.professionaldata.phone}</span></p>
                    </div>



                  </Paper>
                </div>
              })
              :
              <h1>No resume Added</h1>}


          </div>
        </Box >

      </div>

    </>
  )
}

export default History