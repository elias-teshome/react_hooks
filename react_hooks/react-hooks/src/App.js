import {useState,useEffect} from 'react'
import './App.css';
import {FaStar} from 'react-icons/fa'


function App() {

  //const  [el,,]=["elias","girma","teshome"]
  
 const [state, setState] = useState(true)

 const [checked, setChecked]=useState(false);
const creatArary=(length)=>
 [...Array(length)];

function Star({selected})
{
  return <FaStar onClick={()=>setState(!state)} color={selected? 'red':'gray'}/>
}
function StarRating({total=5})
{
  return creatArary(total).map((n,i)=><Star selected={state} key={i}/>)
}


//use effect
const [or, setOr]=useState("orGate");
const [and, setAnd]=useState("andGate");

useEffect(() => {
 console.log(`the gate is ${or}`)
},[or])

useEffect(() => {
  console.log(`the gate is ${and}`)
 },[and])
 

const [data,setDate]=useState([]);
useEffect(()=>{
  fetch('https://api.github.com/users')
  .then(response=>response.json())
  .then(r=>setDate(r));
})



if(data){

  return (

  <div>
 <input type='checkbox' value={checked} onChange={()=>setChecked(!checked)}/>
  <p>{checked ? "Checked":"notchecked"}</p>
  <StarRating total={10}/>

  <button onClick={()=>setOr("or")}>or</button>
  <button onClick={()=>setAnd("and")}>and</button>

  <ul>
      {
       
          data.map(d=>(
          <li key={d.id}>

            {d.login}

          </li>))

      }
       
     
    </ul>


  </div>

  );
}
}

export default App;
