import { useState } from 'react'


function App() {
  const [color, setColor] = useState("pink")

  return (
     <div className='w-full h-screen duration-200' 
     style={{backgroundColor: color}}>
         
         <div className='flex flex-wrap justify-center bottom-12 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-gray-100 px-3 py-2 rounded-md'>
            <button className='text-red-500 bg-white border-black rounded-lg' 
            onClick={() => setColor("red")}>Red</button>

            <button className='text-green-500 bg-white border-black rounded-lg' 
            onClick={() => setColor("green")}>green</button>

<button className='text-blue-500 bg-white border-black rounded-lg' 
            onClick={() => setColor("blue")}>blue</button>
          </div>
         </div>
     </div>
  )
}

export default App
