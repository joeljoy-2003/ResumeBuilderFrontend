import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

//1. add resume - POST - steps component

export const addresumeAPI = async (reqbody) => {
    return await commonAPI("POST", `${BASEURL}/all-resumes`, reqbody)
}

//2. get a resume
export const getallresumeAPI = async (id) => {
    return await commonAPI("GET", `${BASEURL}/all-resumes/${id}`, {})
}

//3. update resume
export const updateresumeAPI = async (id, reqbody) => {
    return await commonAPI("PUT", `${BASEURL}/all-resumes/${id}`, reqbody)
}


//to get all resume @ history 
export const getresumeAPI = async () => {
    return await commonAPI("GET", `${BASEURL}/all-resumes/$`)
}


//3. Edit Resume

//4. Delete Resume

export const deleteresumeAPI = async (id) => {
    return await commonAPI("DELETE", `${BASEURL}/all-resumes/${id}`)
}
