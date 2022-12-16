
import React from 'react';

const navbar= () =>{
  return (
  <div style={styles.nav}>
   <img style={styles.carticon} src="https://cdn-icons-png.flaticon.com/512/3155/3155595.png" alt="carticon"/>&nbsp;<h1 style={{marginLeft:20}}>Medical Darpan</h1>
    <div style={styles.shift}>
    <a href=''  style={{color:'white',textDecoration: 'none'}}><span>&nbsp; Home</span></a>


     <a href=''  style={{color:'white',textDecoration: 'none'}}><span>&nbsp; Products</span></a>


     <a href=''  style={{color:'white',textDecoration: 'none'}}><span>&nbsp; Distributors</span></a>
    
   
    <a href=''  style={{color:'white',textDecoration: 'none'}}><span>&nbsp; Manufactures</span></a>
   
   
    <a href='' style={{color:'white',textDecoration: 'none'}}><span >&nbsp; AboutUS</span></a>
   
  
    <a href=''style={{color:'white',textDecoration: 'none'}}><span>&nbsp; Blog</span></a>
    </div>
   
    <a href=''  style={{color:'white',textDecoration: 'none'}}><span> Login &nbsp;</span></a>
    

    <a href=''  style={{color:'white',textDecoration: 'none'}}><img style={styles.carticon} src="https://cdn-icons-png.flaticon.com/512/3033/3033143.png" alt="carticon"/></a>

    </div>
  );
}
const styles={
    nav:{
        height:50,
        background:'Darkred',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        color:'white',
    },
    carticon:{
        height:32,
        marginRight:0
    },
   shift:{
    margin:'auto',
   },
}
export default navbar;