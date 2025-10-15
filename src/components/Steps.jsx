import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { addresumeAPI } from '../service/allAPI';
import Swal from 'sweetalert2'

const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience', 'Skills & Certifications', 'Review & Submit'];


function Steps({ setUserInput, userInput,setisresumeadded,setisresumeid }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());
    const [inputSkill, setInputSkill] = useState("")


    console.log(userInput);


    const skillarray = ["HTML", "CSS", "JAVASCRIPT", "REACT", "BOOTSTRAP", "NODE.JS", "PYTHON", "ANGULAR", "#C"]

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const addskill = (inputSkill) => {
        console.log("user Input Skill :" + inputSkill);
        if (inputSkill) {
            if (userInput.skill.includes(inputSkill)) {
                alert("Given Skill Already Existing... Add Another Skill ...")
            } else {
                setUserInput({ ...userInput, skill: [...userInput.skill, inputSkill] })
            }
        }

    }

    const removeskill = (skill) => {
        console.log(skill);
        setUserInput({ ...userInput, skill: userInput.skill.filter(item => item != skill) })

    }


    const rendersteparraycontent = (stepcount) => {
        switch (stepcount) {
            case 0: return (
                <div>
                    <h1>Personal Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.professionaldata.name} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, name: e.target.value } })} id="name" label="Full Name" variant="standard" />
                        <TextField value={userInput.professionaldata.jobtitle} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, jobtitle: e.target.value } })} id="job" label="Job Title" variant="standard" />
                        <TextField value={userInput.professionaldata.location} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, location: e.target.value } })} id="location" label="Location" variant="standard" />
                    </div>
                </div>
            )
            case 1: return (
                <div>
                    <h1>Contact Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.professionaldata.email} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, email: e.target.value } })} id="email" label="Email" variant="standard" />
                        <TextField value={userInput.professionaldata.phone} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, phone: e.target.value } })} id="phone" label="Phone Number" variant="standard" />
                        <TextField value={userInput.professionaldata.github} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, github: e.target.value } })} id="github" label="GitHub Profile Link" variant="standard" />
                        <TextField value={userInput.professionaldata.linkedin} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, linkedin: e.target.value } })} id="linkedin" label="LinkedIn Profile Link" variant="standard" />
                        <TextField value={userInput.professionaldata.portfolio} onChange={(e) => setUserInput({ ...userInput, professionaldata: { ...userInput.professionaldata, portfolio: e.target.value } })} id="portfolio" label="Portfolio Profile Link" variant="standard" />

                    </div>
                </div>
            )
            case 2: return (
                <div>
                    <h1>Educational Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.educationdata.course} onChange={(e) => setUserInput({ ...userInput, educationdata: { ...userInput.educationdata, course: e.target.value } })} id="course" label="Course Name" variant="standard" />
                        <TextField value={userInput.educationdata.college} onChange={(e) => setUserInput({ ...userInput, educationdata: { ...userInput.educationdata, college: e.target.value } })} id="college" label="College Name" variant="standard" />
                        <TextField value={userInput.educationdata.university} onChange={(e) => setUserInput({ ...userInput, educationdata: { ...userInput.educationdata, university: e.target.value } })} id="university" label="University Name" variant="standard" />
                        <TextField value={userInput.educationdata.year} onChange={(e) => setUserInput({ ...userInput, educationdata: { ...userInput.educationdata, year: e.target.value } })} id="passout" label="Year Of Passout" variant="standard" />

                    </div>
                </div>
            )
            case 3: return (
                <div>
                    <h1>Professional Details</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.experience.jobrole} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, jobrole: e.target.value } })} id="job" label="Job or Internship" variant="standard" />
                        <TextField value={userInput.experience.company} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, company: e.target.value } })} id="company" label="Company Name" variant="standard" />
                        <TextField value={userInput.experience.joblocation} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, joblocation: e.target.value } })} id="companylocation" label="Location" variant="standard" />
                        <TextField value={userInput.experience.duration} onChange={(e) => setUserInput({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } })} id="duration" label="Duration" variant="standard" />
                    </div>
                </div>
            )
            case 4: return (
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
                                skillarray.map((userskill) => (
                                    <Button onClick={() => addskill(userskill)} key={userskill} variant="outlined">{userskill}</Button>

                                ))
                            }
                        </div>

                    </div>
                    <div className='mt-3'>
                        <h4>Added Skill:</h4>
                        {

                            userInput.skill.map((item) => (
                                <span key={item} className='btn btn-primary me-3 mb-2'>{item}<button onClick={() => removeskill(item)} className='text-light btn'>X</button></span>
                            ))
                        }

                    </div>
                </div>
            )
            case 5: return (
                <div>
                    <h1>Professional Summary</h1>
                    <div className='d-flex row p-3'>
                        <TextField value={userInput.summary} onChange={(e) => setUserInput({ ...userInput, summary: e.target.value })} multiline rows={5} id="summary" label="Write a Short Profile Summary" variant="standard" />
                    </div>
                </div>
            )


        }

    }

    //Add Resume
    const handleaddresume = async () => {
        const { name, jobtitle, location } = userInput.professionaldata
        if (name && jobtitle && location) {
            const result = await addresumeAPI(userInput)
            console.log(result);
            //console.log(result.data.id);
           // setisresumeid(result.data.id)
            
            setisresumeadded(true)
            Swal.fire({
                title: "Good job!",
                text: "Congrats ! Resume Added Successfully!",
                icon: "success"
            });

        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error! Resume Added Failed!",
            });
        }
    }


    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <div>
                                <Button onClick={handleReset}>Reset</Button>
                                <Button className='ms-5' variant='contained' onClick={handleaddresume}>Add Resume</Button>

                            </div>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        {rendersteparraycontent(activeStep)}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <div onClick={handleNext}>
                                {activeStep === steps.length - 1 ?
                                    <Button variant='contained'>Finish</Button>
                                    :
                                    <Button variant='contained'>Next</Button>}



                            </div>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
        </>
    )
}

export default Steps
