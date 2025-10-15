import React from 'react'
import { useState } from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'


function Form() {
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
  const [isresumeadded, setisresumeadded] = useState(false)
  const [resumeid,setisresumeid]=useState("")
  //console.log(resumeid);
  
  return (
    <>
      <div className="container-fluid">
        {isresumeadded ?
          <div className="row p-5">
            <div className='col-2'></div>

            <div className="col-8">
              <Preview userInput={userInput} isresumeadded={isresumeadded} resumeid={resumeid} setUserInput={setUserInput} />
            </div>
            <div className='col-2'></div>
          </div>
          :
          <div className="row p-5">
            <div className="col-6">
              <Steps setUserInput={setUserInput} userInput={userInput} setisresumeadded={setisresumeadded} setisresumeid={setisresumeid} />
            </div>
            <div className="col-6">
              <Preview userInput={userInput} />
            </div>

          </div>}
      </div>
    </>
  )
}

export default Form