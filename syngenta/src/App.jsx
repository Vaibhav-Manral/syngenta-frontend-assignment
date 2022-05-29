import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
const[input,setinput]=useState();// for input
//-------Left-handside circle Ref
const ref1=useRef(0);
const ref2=useRef(0);
const ref3=useRef(0);
const ref4=useRef(0);
const ref5=useRef(0);

//-------Empty Div Ref
const eref1=useRef(0);
const eref2=useRef(0);
const eref3=useRef(0);
const eref4=useRef(0);
const eref5=useRef(0);

const handle=(ref)=>{
  console.log(ref)
// console.log(eref1.current.className)
// console.log(ref.target.className)
  if(ref.target.className=="emptycircle1")
  {
    eref1.current.style.display="none";
    ref1.current.style.display="block";
  }
  else if(ref.target.className=="emptycircle2")
  {
    eref2.current.style.display="none";
    ref2.current.style.display="block";
  }
  else if(ref.target.className=="emptycircle3")
  {
    eref3.current.style.display="none";
    ref3.current.style.display="block";
  }
  else if(ref.target.className=="emptycircle4")
  {
    eref4.current.style.display="none";
    ref4.current.style.display="block";
  }
  else if(ref.target.className=="emptycircle5")
  {
    eref5.current.style.display="none";
    ref5.current.style.display="block";
  }
}

const display=()=>{

if(input==1)
{
  ref1.current.style.display="none";
  eref1.current.style.display="block";
}
else if(input==2){
ref2.current.style.display="none";
eref2.current.style.display="block";
}
else if(input==3){
  ref3.current.style.display="none";
  eref3.current.style.display="block";
}
else if(input==4){
  ref4.current.style.display="none";
  eref4.current.style.display="block";
}
else if(input==5){
  ref5.current.style.display="none";
  eref5.current.style.display="block";
}
else{
  alert("Please Enter a valid number from 1 to 5")
}

// console.log("tested");
// console.log(myref.current)
}
  return (
    <div className="App">
    Enter Circle Number:-<input className='textbox' onChange={(e)=>{setinput(e.target.value)}}/>
    {/* Enter Circle Number:-<input className='textbox' onChange={handle}/> */}
    <button onClick={display}>shoot</button>
    <div className='flexbox'>
      
    <div className='emptydiv'>
      <p className='_emptydiv'>EmptyDiv</p>
          <div className='emptycircle1' onClick={handle} ref={eref1}>

          </div>
          <div className='emptycircle2'  onClick={handle} ref={eref2}>

          </div>
          <div className='emptycircle3' onClick={handle}  ref={eref3}>

          </div>
          <div className='emptycircle4' onClick={handle}  ref={eref4}>

          </div>
          <div className='emptycircle5' onClick={handle}  ref={eref5}>

          </div>
    </div>
<div className='circlediv'>
<div className="circle1" ref={ref1}>

</div>
<div className='circle2' ref={ref2}>

</div>
<div className='circle3' ref={ref3}>

</div>
<div className='circle4' ref={ref4}>

</div>
<div className='circle5' ref={ref5}>

</div>
    </div>
    </div>
    </div>
  )
}

export default App
