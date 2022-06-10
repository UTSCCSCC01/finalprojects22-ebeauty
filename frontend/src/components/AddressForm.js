import React from 'react'
import "../css/index.css";

const Button = () => {
  const onClick = () => {
    console.log('address entered')
    const addr = document.querySelector('#address')
    const msg1 = document.querySelector('#m1')
    console.log(addr.value)
    if (addr.value !== ''){
      msg1.innerHTML = 'address added successfully!'
      msg1.className='success-message'
      setTimeout (()=>msg1.innerHTML='', 1000)
    }
    else{
      msg1.innerHTML ='Please enter field'
      msg1.className='error-message'
      setTimeout (()=>msg1.innerHTML='', 1000)
    }
  }
  return (
    <div className='address-form'>
      <h2 style={{color:'#333'}}> Add a New Address </h2>
      <div className='form-container'>
        <div id='m1'> </div>
        <br />
        <input className="address-text" id='address'/>
        <button onClick={onClick} className='btn' id='address-btn'>Enter</button>
      </div>
      <button onClick={{}} className='complete-btn' id='complete-btn'>Complete</button>
    </div>
    
  )
}
Button.defaultProps = {
  color: '#e27b7b'
}
export default Button