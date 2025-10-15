
import React from 'react'
import { Link } from 'react-router-dom'

function Landingpage() {
  return (
    <>
      <section style={{
        width: "100%", overflow: "hidden", height: "450px", backgroundImage: "url('https://www.resumestar.io/images/mainbanner.jpg')",
        backgroundAttachment: "fixed", backgroundSize: "cover"
      }}>
        <div className='row pt-5' >
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 border py-5 rounded my-5 text-center" style={{ backgroundColor: "white" }}>
            <h2>Designed to get hired.</h2>
            <h4>Your Skills,Your Story,Your Next Job - All in One.</h4>
            <Link to={"/resume"}><button className='btn btn-primary'>Make Your Resume</button></Link>
          </div>
          <div className="col-12 col-md-4"></div>

        </div>
      </section>
      {/* Tools */}
      <section>
        <h1 className='text-center p-5'>Tools</h1>
        <div className='row align-items-center'>
          <div className="col-12 col-md-6 P-5">
            <h4>Resume</h4>
            <p>Create Unlimited new resume and easily edit the afterwards.</p>
            <h4>Cover Letters</h4>
            <p>Easily write proffesional Cover Letters.</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings.</p>
            <h4>Applications</h4>
            <p>Effortlessly manage and track your job applications in an organized manner.</p>
          </div>
          <div className="col-12 col-md-6">
            <img src='https://i.pinimg.com/736x/f4/33/83/f433835b0f25f4b36de921ffdfa166b4.jpg' alt='' className='w-75 ms-5'></img>
          </div>
        </div>
      </section>
      <section style={{
        width: "100%", overflow: "hidden", height: "450px", backgroundImage: "url('https://as2.ftcdn.net/jpg/02/16/47/85/1000_F_216478576_nMIuHy7GaSGawBVnm657VwS2XU3UuYHX.jpg')",
        backgroundAttachment: "fixed", backgroundSize: "cover"
      }}>

      </section>
      <section>
        <h1 className='text-center p-5'>Testimony</h1>
        <div className='row align-items-center'>
          <div className="col-12 col-md-6">
            <h1>Trusted by professionals worldwide.</h1>
            <p> At LiveCareer, we don't just help you create résumés — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.
            </p>
            <p>In fact, users who used LiveCareer reported getting hired an average of 48 days faster.</p>

            <p>Join thousands of job-seekers who’ve fast-tracked their careers with a résumé that truly stands out.</p>
          </div>
          <div className="col-12 col-md-6">
            <div className='row mb-2 mt-5'>
              <div className="col -3">
                <img className='w-100' src='https://images.filmibeat.com/img/2018/05/tovinothomas-1527271368.jpg' alt=''></img>
              </div>
              <div className="col -3">
                <img className='w-100' src='https://images.filmibeat.com/img/2018/05/tovinothomas-1527271368.jpg' alt=''></img>

              </div>
              <div className="col -3">
                <img className='w-100' src='https://images.filmibeat.com/img/2018/05/tovinothomas-1527271368.jpg' alt=''></img>

              </div>
              <div className="col -3">
                <img className='w-100' src='https://images.filmibeat.com/img/2018/05/tovinothomas-1527271368.jpg' alt=''></img>

              </div>
            </div>


            <div className='row mb-2'>
              <div className="col-3">
                <img className='w-100' src='https://images.filmibeat.com/ph-big/2019/02/mohanlal_1550576448230.jpg' alt=''></img>
              </div>
              <div className="col-3">
                <img className='w-100' src='https://images.filmibeat.com/ph-big/2019/02/mohanlal_1550576448230.jpg' alt=''></img>

              </div>
              <div className="col-3">
                <img className='w-100' src='https://images.filmibeat.com/ph-big/2019/02/mohanlal_1550576448230.jpg' alt=''></img>

              </div>
              <div className="col-3">
                <img className='w-100' src='https://images.filmibeat.com/ph-big/2019/02/mohanlal_1550576448230.jpg' alt=''></img>

              </div>

            </div>
            <div className='row mb-2'>
              <div className="col-3">
                <img className='w-100' src='https://ca-times.brightspotcdn.com/dims4/default/37bd829/2147483647/strip/true/crop/2048x1505+0+0/resize/1200x882!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F22%2Fca%2F63e467e39fb4dc544410ff1979c2%2Fla-elhill-1479224927-snap-photo' alt=''></img>
              </div>
              <div className="col-3">
                <img className='w-100' src='https://ca-times.brightspotcdn.com/dims4/default/37bd829/2147483647/strip/true/crop/2048x1505+0+0/resize/1200x882!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F22%2Fca%2F63e467e39fb4dc544410ff1979c2%2Fla-elhill-1479224927-snap-photo' alt=''></img>

              </div>
              <div className="col-3">
                <img className='w-100' src='https://ca-times.brightspotcdn.com/dims4/default/37bd829/2147483647/strip/true/crop/2048x1505+0+0/resize/1200x882!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F22%2Fca%2F63e467e39fb4dc544410ff1979c2%2Fla-elhill-1479224927-snap-photo' alt=''></img>

              </div>
              <div className="col-3">
                <img className='w-100' src='https://ca-times.brightspotcdn.com/dims4/default/37bd829/2147483647/strip/true/crop/2048x1505+0+0/resize/1200x882!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F22%2Fca%2F63e467e39fb4dc544410ff1979c2%2Fla-elhill-1479224927-snap-photo' alt=''></img>

              </div>

            </div>





          </div>
        </div>

      </section>
    </>
  )
}

export default Landingpage