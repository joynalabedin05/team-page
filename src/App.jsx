
import { useEffect, useState } from 'react'
import './App.css'
import University from './components/University';
import Person from './components/Person';

function App() {
  const [infos, setInfo] = useState([]);
  // console.log(info);
 
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setInfo(data))
  },[])


  return (
    <div className='bg-orange-100 md:px-48  md:p-20 p-5'>
      
      <h1 className=' text-center rounded text-4xl underline underline-offset-8'>Team Page</h1>
      <h1 className='my-14 text-4xl'>Learn from Scientists, research Scholars, from the <br /> top institutes in the world.</h1>

      {/* ---------------------------------------- */}

      <div className='grid md:grid-cols-4  md:gap-20 gap-10 rounded'>
        {
          infos.slice(0,10).map((info, i)=> <University info={info} key={i}></University>)
        }
        <h1 className='text-3xl mt-10'>..... and so on.</h1>
      </div>

      {/* ----------------------------------------------------- */}

      <div className=''>
        <h1 className='text-3xl text-center underline underline-offset-8 my-16'>Meet your mentors</h1>

        <div className='grid md:grid-cols-4 md:gap-20 gap-10'>
        {
          infos.map((info, i)=> <Person info={info} key={i}></Person>)
        }
        </div>

      </div>

      {/* ------------------------------------------------- */}

      <div>
        <h1 className='text-3xl mt-20'>Mentor & Advisor</h1>
        <div className='md:flex gap-10'>
          <div className='bg-orange-200 p-10 mt-5'>
            <img className='rounded-full w-9/12' src="https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=" alt="" />
            <p className='text-2xl mt-4'>Dr. Ouckard <br /> Principal Projects Statistical |||- Moders</p>
          </div>
          <div className='bg-orange-200 p-10 mt-5'>
            <img className='rounded-full w-9/12' src="https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=" alt="" />
            <p className='text-2xl mt-4 mb-10'>Akhil Tripathi</p>
            <button className='text-lg bg-orange-100 p-2 rounded'>Message him now</button>
          </div>
          <div className='bg-orange-200 p-10 mt-5'>
            <img className='rounded-full w-9/12' src="https://media.istockphoto.com/id/1210939712/vector/user-icon-people-icon-isolated-on-white-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=vKDH9j7PPMN-AiUX8vsKlmOonwx7wjqdKiLge7PX1ZQ=" alt="" />
            <p className='text-2xl mt-4 mb-10'>Vivek Dwivedi</p>
            <button className='text-lg bg-orange-100 p-2 rounded'>Message him now</button>

          </div>
         
        </div>

      </div>

      
      
    </div>
  )
}

export default App
