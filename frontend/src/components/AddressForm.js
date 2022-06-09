import React from 'react'

const Button = ({color}) => {
  const onClick = () => {
    console.log('address entered')
    const btn = document.querySelector('#address-btn')
    btn.style.backgroundColor='pink'
    setTimeout (()=>btn.style.backgroundColor='grey', 1000)
    const addr = document.querySelector('#address')
    const msg1 = document.querySelector('#m1')
    const msg2 = document.querySelector('#m2')
    console.log(addr.value)
    if (addr.value !== ''){
      msg2.innerHTML = 'address added successfully!'
      setTimeout (()=>msg2.innerHTML='', 1000)
    }
    else{
      msg1.innerHTML ='Please enter field'
      setTimeout (()=>msg1.innerHTML='', 1000)
    }
  }
  return (
    <div>
      <h2> Add a New Address </h2>
      <div>
        <div className='message1' id='m1'></div>
        <input type="text" id='address'/>
      </div>
      <button onClick={onClick} style={{backgroundColor: color}} className='btn' id='address-btn'>Enter</button>
      <div className='message2' id='m2'></div>
    </div>
    
  )
}
Button.defaultProps = {
  color: 'grey'
}
export default Button