import React from 'react'
import Heading from './Heading'

const Skils = () => {
  return (
    <div id='skills' className='container pt-32'>
      <Heading title='Skills'/>
      <h1 className='text-4xl text-center m-4 '>Technical Skills
      </h1>
      <ul>
        <li className='text-center text-2xl text-slate-300 '>Programming Languages: [e.g., Python, JavaScript, C++]</li>
        <li className='text-center text-2xl text-slate-300'>Web Development: [e.g., HTML, CSS, React, Node.js]</li>
        <li className='text-center text-2xl text-slate-300'>Database Management: [e.g., MySQL, MongoDB, PostgreSQL]</li>
        <li className='text-center text-2xl text-slate-300'>Tools & Technologies: [e.g., Git, Docker, Kubernetes, Figma, Adobe Suite]</li>
      </ul>
      

      <h1 className='text-4xl text-center m-4'>Design Skills
      </h1>
      <ul>
       
        <li className='text-center text-2xl text-slate-300'>UI/UX Design: Wireframing, Prototyping, User Research</li>
        <li className='text-center text-2xl text-slate-300'>Graphic Design: Branding, Illustration, Typography</li>
        <li className='text-center text-2xl text-slate-300'>Tools: [e.g., Figma, Sketch, Adobe Photoshop, Illustrator]</li>
      </ul>

      <h1 className='text-4xl text-center m-4'>Soft Skills
      </h1>
      <ul>
        <li className='text-center text-2xl text-slate-300'>Creative Problem-Solving</li>
        <li className='text-center text-2xl text-slate-300'>Effective Communication</li>
        <li className='text-center text-2xl text-slate-300'>Team Collaboration</li>
        <li className='text-center text-2xl text-slate-300'>Time Management</li>
        <li className='text-center text-2xl text-slate-300'>Adaptability</li>
      </ul>
    </div>
  )
}

export default Skils
