// eslint-disable-next-line no-unused-vars
import React from 'react'
import blogData from './blogData'
import './main.css'
import summaryData from './summaryData'
function Main() {
  return (
    <div className="mainy">
        <h1 className="heading">The Blog Website</h1>
         <div className='main'>
        
        <div className="blogcontent">
        {blogData.map(({title, content})=>{
            return(
                // eslint-disable-next-line react/jsx-key
                <div className="maincontent">
                    <h3 className='title'>{title}</h3>
                    <p className='content'>{content}</p>
                </div>
            )
        })}
        </div>

        <div className="summaryContent">
            <h2 className='summaryName'>Contents</h2>
            {summaryData.map(({summaryTitle, summary})=>{
                return(
                    // eslint-disable-next-line react/jsx-key
                    <div className="sum">
                        <h5 className='summaryTitle'>{summaryTitle}</h5>
                        <p className='summary'>{summary}</p>
                    </div>
                )
            })}

        </div>
   

  
        
      
    </div>
    </div>
   
  )
}




export default Main
