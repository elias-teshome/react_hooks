import {useState} from 'react'
import './App.css';


function App() {

  //const  [el,,]=["elias","girma","teshome"]
  
 //const [state, setState] = useState("befor")
 const [checked, setChecked]=useState(false);

  return (
  <div>
 
  
  <input type='checkbox' value={checked} onChange={()=>setChecked(!checked)}/>
  <p>{checked ? "Checked":"notchecked"}</p>
  </div>
  );
}

export default App;
