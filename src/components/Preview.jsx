import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Edit from './Edit';
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';


function Preview({ userInput, isresumeadded, resumeid, setUserInput }) {
  console.log(userInput);

  const downloadPDF = async () => {
    const input = document.getElementById("result") //to get the id
    const canvas = await html2canvas(input, { scale: 2 }) // convert the selected html to canvas(screenshot)
    const imgData = canvas.toDataURL("img/png") //convert canvas into image url

    //pdf
    const pdf = new jsPDF("P", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight)
    pdf.save("resume.pdf")

  }

  return (
    <>

      <Box component="section">
        <Stack direction={"row"} sx={{ gap: "10px", display: "flex", justifyContent: "end" }}>
          {/*edit */}
          {isresumeadded &&
            <div className='d-flex'>
              {/*  <button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaEdit /></button> */}
              <Edit resumeid={resumeid} setUserInput={setUserInput} />
              {/* download */}
              <p><button type='button' onClick={downloadPDF} className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaFileDownload /></button></p>
            </div>}

          {/*history */}
          <Link href={"/history"}><p><button className='btn btn-primary align-items-center d-flex justify-content-center btn-lg'><FaHistory /></button></p></Link>
          <Link href={"/"}> <p className='btn btn-primary'>Back</p></Link>
        </Stack>
        <div className='mt-3' id='result'>
          <Paper elevation={3} sx={{ p: 2, textAlign: "center", padding: "13px" }}>
            <h2>{userInput.professionaldata.name}</h2>
            <h4>{userInput.professionaldata.jobtitle}</h4>
            <p><span>{userInput.professionaldata.location}</span> | <span>{userInput.professionaldata.email}</span> | <span>{userInput.professionaldata.phone}</span></p>
            <div className='d-flex gap-3 justify-content-center'>
              <Link href={userInput.professionaldata.github}>Github</Link>|
              <Link href={userInput.professionaldata.linkedin}>Linkedin</Link>|
              <Link href={userInput.professionaldata.portfolio}>Portfolio</Link>|

            </div>
            <Divider sx={{ fontSize: "23px", marginBottom: "10px" }}>Summary</Divider>
            <p style={{ textAlign: "justify" }}>{userInput.summary}</p>
            <Divider sx={{ fontSize: "23px", marginBottom: "10px" }}>Education</Divider>
            <h5>{userInput.educationdata.course}</h5>
            <p>{userInput.educationdata.college} | {userInput.educationdata.university} | {userInput.educationdata.year}</p>
            <Divider sx={{ fontSize: "23px", marginBottom: "10px" }}>Professional Experience</Divider>
            <p>{userInput.experience.jobrole}</p>
            <p>{userInput.experience.company} | {userInput.experience.joblocation} | {userInput.experience.duration}</p>
            <Divider sx={{ fontSize: "23px", marginBottom: "10px" }}>Skills</Divider>
            <Stack spacing={2} direction={"row"} sx={{ flexWrap: "wrap", gap: "10px" }}>
              {userInput.skill.map((item) => (
                <Button variant="contained">{item}</Button>

              ))}
            </Stack>





          </Paper>
        </div>

      </Box>

    </>
  )
}

export default Preview