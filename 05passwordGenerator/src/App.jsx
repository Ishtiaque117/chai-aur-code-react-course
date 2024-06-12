import { useState,useCallback,useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numflag,setNumflag] = useState(false);
  const [charflag,setCharflag] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback( () => {
    let finalPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numflag) str += "0123456789";
    if(charflag) str += "~!@#$%^&*_+=[]{}`";

    for(let i=1;i<=length;i++){
      let index = Math.floor(Math.random()*str.length +1);
      finalPassword += str.charAt(index);
    }

    setPassword(finalPassword);
  }, [length,numflag,charflag,setPassword]);



  useEffect( () => {
    passwordGenerator();
  },[length,numflag,charflag,passwordGenerator]);
  

  const passwordRef = useRef(null);

  const copyPassword = useCallback( () => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
  },[password])


  return (
    <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input 
              type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
          
          />

          <button 
          onClick={copyPassword}
          className='bg-black text-center px-3 py-0.5 shrink-0'>Copy</button>

        </div >

        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1 text-lg'>
            <input 
                type="range"
                min={8}
                max={100}
                value={length}
                className='cursor-pointer'
                onChange={(e) => setLength(e.target.value)}
            />

            <label>Length : {length}</label>

          </div>

          <div className='flex items-center gap-x-1 text-lg'>
          <input 
                type="checkbox"
                defaultChecked={numflag}
                id="numberInput"
                className='w-4 h-3'
                onChange={() => setNumflag((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1 text-lg'>
          <input 
                type="checkbox"
                defaultChecked={charflag}
                className='w-4 h-3'
                id="characterInput"
                onChange={() => setCharflag((prev) => !prev)}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>

       </div>
    </>
  )
}

export default App
