import React from 'react'
import { fridgeData } from '../data/fridge'
import Navbar from '../components/Navbar'


const Fridge = () => {
  return (
    <>
    <Navbar />
    <div className='pageSection'>
      {
        fridgeData.map((item) =>{
            return(
                <div >
                   <div className="pageImg">
                        <img src={item.image} alt="" /> 
                    </div>
                    <div className='proModel'>
                        {item.brand} - {item.model}
                    </div>
                    
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Fridge
