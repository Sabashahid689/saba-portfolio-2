import React from 'react'

const Skills = () => {
  return (
    <div id='skills'className='container pt-32'>
     <div className='grid md:grid-cols-2 gap-20 items-center'>
     <div data-aos="zoom-in-up">
        <h2 className='text-4xl md:text-5xl'> Experience And Technologies I Work With</h2>
        <p className='text-gray-500 pt-2'>
        Proficient in HTML and CSS for building responsive web layouts, with a focus on clean, semantic code. Experienced with **TypeScript** for scalable, maintainable JavaScript projects, ensuring strong type-checking and enhanced development. Skilled in **Tailwind CSS** for rapid UI design and styling, creating modern and consistent interfaces efficiently. Familiar with **Amazon wholesale business** strategies, including product sourcing, FBA (Fulfillment by Amazon), and inventory management, optimizing operations for profitability.
        </p>
     </div>
     <div>
      <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
        <div className='space-y-2'>
          <h2 data-aos="zoom-in-up">Typescript</h2>
          <h2 data-aos="zoom-in-up">Next.js</h2>
          <h2 data-aos="zoom-in-up">Html</h2>
        </div>
        <div className='space-y-2'>
          <h2 data-aos="zoom-in-up">Tailwind</h2>
          <h2 data-aos="zoom-in-up">CSS</h2>
          <h2 data-aos="zoom-in-up">Python</h2>
        </div>
      </div>
     </div>
    </div> 
    </div>
  )
}

export default Skills
