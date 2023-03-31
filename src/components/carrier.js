import React from 'react';
import "./carrier.css";

const Carrier = () => {
  return (
    <div>
      <div className="carrier">
      <div className='carrier-section col-lg-4'>
        <span className='text-center text-primary'><h1>CARRIERS</h1></span>
        <p className='mt-5'>Working collaborative with our team members, clients and healthcare partners, Cedar Gate is advancing 
          transparency in the healthcare industry to improve the lives of people, now and in the future. When you 
          join us, you become part of an enterprise delivering on the promise of better healthcare for all.
          We make diversity, equity, and inclusion part of everything we do—from how we build our products 
          to how we build our workforce. We’re proud to have a workforce that’s more representative of our 
          users, and a workplace that creates a sense of belonging for everyone.</p>
      </div>
      </div>


      <div className='d-flex bg-light'>
        <span className=' col-lg-4 text-center text-primary'><h1>Equal Opportunity</h1></span>
        <p className=' col-lg-8'>Cedar Gate is an equal opportunity workplace and an Affirmative Action employer.
         We are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex,
          national origin, sexual orientation, age, citizenship, marital status, disability, gender identity or
           veteran status. We also consider qualified applicants regardless of criminal histories, consistent with
            legal requirements..</p>
      </div>


    </div>
  )
}

export default Carrier;