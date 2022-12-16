import React from 'react';

const SearchBar = () => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem",marginLeft:10,marginBottom:25,display:'inline-block',position:'relative'};
  return (
    <div>
    <input 
     style={BarStyling}
     key="random1"
     placeholder={"Paracetamol"}
    />
    <a href='/' style={{textDecoartion:'none'}}><img style={styles.carticon} src="https://cdn-icons-png.flaticon.com/512/149/149852.png" alt="carticon"/></a>
    </div>
  );
}
const styles={
    carticon:{
        height:15,
        position:'absolute',
        Right:0,
        marginLeft:-21,
        marginTop:9
    },
}
export default SearchBar