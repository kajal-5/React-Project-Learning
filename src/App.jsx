import { useCallback, useState } from 'react'


function App() {

  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowes]= useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password , setPassword] = useState("")

  const passwordGenrator = useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "~!@#$%^&*():>?<>?}{|}+-=_"

    for(let i=0; i<=Array.length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass = str.charAt(char)
    }

    setPassword(pass)

    },
    [length,numberAllowed,charAllowed,setPassword]
  );
  return (
  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
      px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-center'>Password genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden  mb-4'>
          
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-gray-200'
          placeholder='password'
          readOnly
          />
          

        </div>
    </div>

  )
}

export default App
