import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import AC from '../components/AC'
import Furniture from '../components/Furniture'
import Men from '../components/Men'
import Watch from '../components/Watch'
import Woman from '../components/Woman'
import Kitchen from './Kitchen'

const Products = () => {
  return (
    <div>
      <Mobiles />
      <Computers />
      <AC/>
      <Furniture/>
      <Men />
      <Watch />
      <Woman />
      <Kitchen />

    </div>
  )
}

export default Products
