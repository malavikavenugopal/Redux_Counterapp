
import './App.css';
import Counter from './Components/Counter';


function App() {
  return (
    <>
    <div  style={{backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center',height:'740px'}}className="d-flex justify-content-center align-items-center">
    
    <div style={{backgroundColor:'white',height:'300px',width:'500px'}}>
    <h1 style={{color:'blue',textAlign:'center',marginTop:'10px'}}>Counter Application</h1>
      <Counter/>
      </div>  
   
        
    </div>
  
    </>
  );
}

export default App;
