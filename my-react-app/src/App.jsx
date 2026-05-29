import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student.jsx'

function App() {
   const[name,setname]=useState("")
   const[email,setemail]=useState("")
   const[password,setpassword]=useState("") 
   function show(){
    if(name=="" || email=="" || password==""){
      alert("please fill all the details")
    }
    else{
      alert("form submitted successfully")
    }
   }
    {/*
  const [count, setCount] = useState(0)
   const increment = () => {
    setCount(count + 1)
   }
   const decrement = () => {
    setCount(count - 1)
   }
   const reset = () => {
    setCount(0)
   }
    */}
  return (
    <>
    <h1>Admission Form</h1>
    
    <input type="text" placeholder='ENTER YOUR NAME'  onChange={(e)=>setName(e.target.value)}></input><br></br>
    <input type="text" placeholder='ENTER YOUR EMAIL'  onChange={(e)=>setemail(e.target.value)}></input><br></br>
    <input type="text" placeholder='ENTER YOUR PASSWORD'  onChange={(e)=>setpassword(e.target.value)}></input><br></br>
    <h2> {name}</h2>
    <h2> {email}</h2>
    <h2> {password}</h2>
    <button onClick={show}>submit</button>
      {/*
    <h2>React computer application</h2>
    <h2>Count: {count}</h2>
    <button onClick={increment}>Increment(+)</button><br></br>
    <button onClick={decrement}>Decrement(-)</button><br></br>
    <button onClick={reset}>Reset</button><br></br>
    {/*
    <h2>Student Information</h2>
    <Student name="ujjwal" course="btech" marks="90%"/><br></br>
    <Student name="satyarth" course="btech" marks="80%"/><br></br>
    <Student name="sidhharth" course="btech" marks="70%"/><br></br>
    {/*
    <div>
      
      <audio controls>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mp3"/>
      </audio>
      <video controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" height="500" width="200"/>
      </video>
      <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
      <img src="https://images.pexels.com/photos/37001447/pexels-photo-37001447.jpeg"width="1100" height="500"></img> <br></br>  
      <button>click me</button>   
   <h1>WELCOME TO abes college</h1>
   <h2>hello</h2>
   <p>AIML2</p>
   </div>
   
  
   <Student/>
   */}
      </>
      )
}

export default App
