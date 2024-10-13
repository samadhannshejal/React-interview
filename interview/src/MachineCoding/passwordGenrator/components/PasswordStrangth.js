import React, { useState } from 'react'
import '../../../Styles/GenratePassword.css'
const PasswordStrangth = React.memo(({password='1234'}) => {
    console.log(password)
    const [strength, setStrength] = useState("")
    if(password.length>4)setStrength('Weak');
    else if(password.length>8)setStrength('medium');
    else if(password.length>12)setStrength('Strong');
    else setStrength('Very Strong')

  return (
    <div className='Password-strength'>
       {strength}adafkj
    </div>
  )
})

export default PasswordStrangth
