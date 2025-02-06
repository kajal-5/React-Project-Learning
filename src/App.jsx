import { useCallback, useState , useEffect , useRef} from 'react'


function App() {

  const [length, setlength] = useState(6);
  const [numberAllowed, setNumberAllowed]= useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password , setPassword] = useState("")

  const passwordGenrator = useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "~!@#$%^&*():>?<>?}{|}+-=_"

    for(let i=0; i<=length; i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    },
    [length,numberAllowed,charAllowed,setPassword]
  );
  
  useEffect(()=>{passwordGenrator()},
  [length, numberAllowed, charAllowed, passwordGenrator]);

  const passwordRef = useRef(null)

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,7);
    window.navigator.clipboard.writeText(password)

  },[password])





  return (
  
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg 
      px-4 py-3 my-8 bg-gray-800'>
        <h1 className='text-white text-center px-2 py-2 mx-2 my-2'>Password genrator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-gray-200'
          placeholder='password'
          readOnly
          ref = {passwordRef}
          />
          <button 
          onClick = {copyPassword}
          className='outline-none bg-blue-700 text-white
          px-3 py-1 shrink-0'>
            copy
          </button>

        </div>
        <div className='flex text-sm gap-x-2'> 


          <div className='flex item-center gap-x-1'>
            
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer px-3 py-3'
            onChange={(e)=>{setlength(e.target.value)}}
            />
            <label className='px-3 py-3 text-white'> Length:{length}</label>
          </div>


          <div className='flex item-center gap-x-1'>
            
            <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=> !prev)
            }}
            />
            <label className='px-3 py-3 text-white'>Number</label>
          </div>


          <div className='flex item-center gap-x-1'>
            
            <input
            type="checkbox"
            className='px-3 py-3'
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((preval)=> !preval)
            }}
            />
            <label className='px-3 py-3 text-white'>char</label>
          </div>

        </div>
    </div>

  )
}

export default App
