import React from 'react'
import "./Header.css"
import { QuestionCircleOutlined } from "@ant-design/icons";

function Header() {
  return (
    <div>
        <div  className='header'>
    <h1>Summer Art Camp! 5 Days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
    <h5>Multi-Day Course 
        <QuestionCircleOutlined/></h5>
        </div>
    </div>
  )
}

export default Header