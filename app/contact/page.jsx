'use client'

import { useState } from "react"
import ContactForm from "@components/ContactForm"

const page = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  })
  const updateFormData = (value) =>{setFormData(value)}
  const {name, email, subject, message} = updateFormData
  return (
    <div>
      <ContactForm 
       onChange={(e)=>{console.log(e.target.value)}}
       name={name}
       email={email}
       subject={subject}
       message={message}
      />
    </div>
  )
}

export default page