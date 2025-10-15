import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { getallresumeAPI, updateresumeAPI } from '../service/allAPI';
import { useState } from 'react';
import Swal from 'sweetalert2';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
    maxHeight: '90vh'
};

function Edit(resumeid, setUserInput) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
        geteditresume(resumeid)
    }
    const handleClose = () => setOpen(false);
    // console.log(resumeid);


    const SkillsSuggestionArray = ["HTML", 'CSS', 'JAVASCRIPT', 'REACT', 'MONGODB', "NODE JS"]

    console.log(resumeid);
    const [inputSkill, setInputSkill] = useState("")
    const skillarray = ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP", "NODE.JS", "PYTHON", "ANGULAR", "#C"]

    const addskill = (inputSkill) => {
        console.log("user Input Skill :" + inputSkill);
        if (inputSkill) {
            if (usereditInput.skill.includes(inputSkill)) {
                alert("Given Skill Already Existing... Add Another Skill ...")
            } else {
                setUsereditInput({ ...usereditInput, skill: [...usereditInput.skill, inputSkill] })
            }
        }

    }

    const removeskill = (skill) => {
        console.log(skill);
        setUsereditInput({ ...usereditInput, skill: usereditInput.skill.filter(item => item != skill) })

    }
    const [usereditInput, setUsereditInput] = useState({
        id: "",

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




    const geteditresume = async (resumeid) => {
        try {
            const result = await getallresumeAPI(resumeid)
            console.log(result);
            //setUsereditInput(result.data)



        }
        catch (error) {
            console.log(error);

        }
    }
    console.log(usereditInput);

    const updateresume = async () => {
        try {
            const result = await updateresumeAPI(resumeid, usereditInput)
            console.log(result);
            if (result.status === 200) {
                Swal.fire({
                    title: `Success`,
                    text: `Resume updated successfully`,
                    icon: `success`,
                    confirmButtonText: `Black`
                })
            } else {
                Swal.fire({
                    title: "Error",
                    text: ` Error updating Resume`,
                    icon: `error`,
                    confirmButtonText: `Back`
                })
            }
        } catch (err) {
            Swal.fire({
                title: "Error",
                text: ` Error updating Resume`,
                icon: `error`,
                confirmButtonText: `Back`
            })
        }




    }



    return (
        <div>

            <button onClick={handleOpen} className='btn btn-primary  align-items-center d-flex justify-content-center btn-lg ' ><FaRegEdit /></button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" className='d-flex justify-content-center'>
                        Edit Your Resume
                    </Typography>
                    <div id="modal-modal-description" sx={{ mt: 2 }}>
                        <div>
                            <h1>Personal Details</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={usereditInput.professionaldata.name} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, name: e.target.value } })} id="name" label="Full Name" variant="standard" />
                                <TextField value={usereditInput.professionaldata.jobtitle} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, jobtitle: e.target.value } })} id="job" label="Job Title" variant="standard" />
                                <TextField value={usereditInput.professionaldata.location} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, location: e.target.value } })} id="location" label="Location" variant="standard" />
                            </div>
                        </div>

                        <div>
                            <h1>Contact Details</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={usereditInput.professionaldata.email} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, email: e.target.value } })} id="email" label="Email" variant="standard" />
                                <TextField value={usereditInput.professionaldata.phone} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, phone: e.target.value } })} id="phone" label="Phone Number" variant="standard" />
                                <TextField value={usereditInput.professionaldata.github} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, github: e.target.value } })} id="github" label="GitHub Profile Link" variant="standard" />
                                <TextField value={usereditInput.professionaldata.linkedin} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, linkedin: e.target.value } })} id="linkedin" label="LinkedIn Profile Link" variant="standard" />
                                <TextField value={usereditInput.professionaldata.portfolio} onChange={(e) => setUsereditInput({ ...usereditInput, professionaldata: { ...usereditInput.professionaldata, portfolio: e.target.value } })} id="portfolio" label="Portfolio Profile Link" variant="standard" />

                            </div>
                        </div>

                        <div>
                            <h1>Education Details</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={usereditInput.educationdata.course} onChange={(e) => setUsereditInput({ ...usereditInput, educationdata: { ...usereditInput.educationdata, course: e.target.value } })} id="course" label="Course Name" variant="standard" />
                                <TextField value={usereditInput.educationdata.college} onChange={(e) => setUsereditInput({ ...usereditInput, educationdata: { ...usereditInput.educationdata, college: e.target.value } })} id="college" label="College Name" variant="standard" />
                                <TextField value={usereditInput.educationdata.university} onChange={(e) => setUsereditInput({ ...usereditInput, educationdata: { ...usereditInput.educationdata, university: e.target.value } })} id="university" label="University Name" variant="standard" />
                                <TextField value={usereditInput.educationdata.year} onChange={(e) => setUsereditInput({ ...usereditInput, educationdata: { ...usereditInput.educationdata, year: e.target.value } })} id="passout" label="Year Of Passout" variant="standard" />


                            </div>
                        </div>

                        <div>
                            <h1>Professional Details</h1>
                            <div className='d-flex row p-3'>
                                <TextField value={usereditInput.experience.jobrole} onChange={(e) => setUsereditInput({ ...usereditInput, experience: { ...usereditInput.experience, jobrole: e.target.value } })} id="job" label="Job or Internship" variant="standard" />
                                <TextField value={usereditInput.experience.company} onChange={(e) => setUsereditInput({ ...usereditInput, experience: { ...usereditInput.experience, company: e.target.value } })} id="company" label="Company Name" variant="standard" />
                                <TextField value={usereditInput.experience.joblocation} onChange={(e) => setUsereditInput({ ...usereditInput, experience: { ...usereditInput.experience, joblocation: e.target.value } })} id="companylocation" label="Location" variant="standard" />
                                <TextField value={usereditInput.experience.duration} onChange={(e) => setUsereditInput({ ...usereditInput, experience: { ...usereditInput.experience, duration: e.target.value } })} id="duration" label="Duration" variant="standard" />
                            </div>
                        </div>

                        <div>
                            <h1>Skills</h1>
                            <div className='d-flex align-items-center justify-content-between'>
                                <TextField value={inputSkill} onChange={(e) => setInputSkill(e.target.value)} sx={{ width: "600px" }} id="skill" label="Add Skills" variant="standard" />
                                <Button onClick={() => addskill(inputSkill)} variant="outlined">Add</Button>
                            </div>
                            <div className='mt-3'>
                                <h4>Suggestions :</h4>
                                <div className='d-flex flex-wrap gap-3 mt-3'>
                                    {
                                        SkillsSuggestionArray.map((userskill) => (
                                            <Button onClick={() => addskill(userskill)} key={userskill} variant="outlined">{userskill}</Button>

                                        ))
                                    }
                                </div>

                            </div>
                            <div className='mt-3'>
                                <h4>Added Skill:</h4>
                                {

                                    usereditInput.skill.map((item) => (
                                        <span key={item} className='btn btn-primary me-3 mb-2'>{item}<button onClick={() => removeskill(item)} className='text-light btn'>X</button></span>
                                    ))
                                }

                            </div>
                        </div>

                        <div>
                            <h1>Professional Summary</h1>
                            <div className='d-flex row p-3'>
                                {/* multiline is used to get more lines or spaces like  for typing  */}
                                <TextField value={usereditInput.summary} onChange={(e) => setUsereditInput({ ...usereditInput, summary: e.target.value })} multiline rows={5} id="summary" label="Write a Short Profile Summary" variant="standard" />
                            </div>
                        </div>

                        <div className='d-flex justify-content-end gap-4'>
                            <Button variant='outlined'>Clear</Button>
                            <Button onClick={updateresume} variant='outlined'>Update</Button>

                        </div>

                    </div>
                </Box>
            </Modal>





        </div>
    )
}

export default Edit
