import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[number,setNumber]=useState(false)
  const[char,setChar]=useState(false)
  const[password,setPassword]=useState("")

  //useRef hook
  const passwordRef=useRef(null)

  const passwordGen=useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdeghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+=" !@#$%^&*()_+[]{}/;:,.<>?~`"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,number,char,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(() => {
    passwordGen()
  },[length,number,char,passwordGen]
  )


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500
      bg-gray-800">
        <h1 className=" text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
            />
            <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'></div>
        <div className='flex items-center gap-x-1'>
          <input
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>{setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={number}
          id='numberInput'
          onChange={() => {setNumber((prev) => !prev);
          }
          }
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
          type="checkbox"
          defaultChecked={char}
          id='charInput'
          onChange={() => {setChar((prev) => !prev);
          }
          }
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>

    </>
  )
}

export default App
