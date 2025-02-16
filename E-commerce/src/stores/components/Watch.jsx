import React from 'react'
import {watchData} from '../data/watch'

const Watch = () => {
    
    const firstFiveImages = watchData.slice(0, 5)

  return (
    <>
    <div className='proTitle'>
      <h2>Watches</h2> <br />
    </div>
      <div className='proSection'>
        {
          firstFiveImages.map((item) => {
              return (
                  <div className='imgBox'>
                      <img className='proImage' src={item.image} />
                  </div>
              )
          })
        }
      
      
      </div>
    </>
  )
}

export default Watch
