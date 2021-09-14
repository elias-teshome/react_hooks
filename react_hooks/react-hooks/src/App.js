import {useState} from 'react'
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

  return (

  <div>
 <input type='checkbox' value={checked} onChange={()=>setChecked(!checked)}/>
  <p>{checked ? "Checked":"notchecked"}</p>
  <StarRating total={10}/>
  </div>

  );
}

export default App;
