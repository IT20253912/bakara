
import React,{useEffect,useState} from 'react'
import Header from '../components/Header'
import Tabletest from '../components/Table/Tabletest'
import axios from 'axios'
import { async } from 'q'
import './organazation.css'
import PopupModel from '../components/PopupModel'



const Organizations = () => {

  const [oraganizations, setoraganizations] = useState([])
  const getOrganizations = async () => {
    await axios.get('api/organization').then((res)=>{
      if(res.data){
        //console.log(res.data);
        setoraganizations(res.data);
      }
    })
  }
  useEffect(() => {
    getOrganizations()
  
 
  }, [])
  
  return (

    <div className='body-container'>
      <Header />

      <div className='table-container'>
        <span>Oraganization list</span>
        < Tabletest rows={oraganizations}/></div>

        
        <PopupModel/>
      
    </div>
   
  )
}

export default Organizations