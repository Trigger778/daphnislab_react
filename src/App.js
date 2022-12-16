
import './App.css';
import Nav from './components/navbar';
import Searchbar from './components/searchbar';
import Box from './components/boxes';
import List from './components/list';
function App() {
  return (
    <div style={{backgroundColor:'whitesmoke'}}>
    <div>
        <Nav />
        <h6>Medical Darpan<span>{">"}</span> Search <span>{">"}</span> FabiFlu Tablet</h6>
        <Searchbar />
      </div>
      <div style={{marginLeft:10}}>
         <p style={{display:'inline',fontSize:21,marginTop:200}}>Paracetamol</p>
         <p style={{display:'inline',fontSize:15}}>&nbsp;(128 Products)&nbsp;&nbsp;&nbsp;</p>
         <span style={{backgroundColor:"lightskyblue",fontSize:15,borderRadius:3,padding:5}}>Aceclofenac  <a href="/" style={{textDecoration:'none'}}> <img style={{height:10}} src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="carticon"/></a></span>
         <span style={{backgroundColor:"lightskyblue",fontSize:15,borderRadius:3,margin:5,padding:5}}>500mg   <a href="/" style={{textDecoration:'none'}}><img style={{height:10}} src="https://cdn-icons-png.flaticon.com/512/2976/2976286.png" alt="carticon"/></a></span>
         <a href="/" style={{textDecoration:'none'}}><span style={{color:"darkred",fontSize:15,margin:5,padding:5}}>Remove all</span></a>
      </div>
       <span style={{display:'flex'}}>
          <List />
          <Box />
        </span>
        
      </div>
  );
}

export default App;
