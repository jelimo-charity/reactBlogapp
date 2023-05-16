import React from 'react'

function Content() {
  return (
    <div>
        <blogTitle title="The Present" />
      
    </div>
  )
}

const blogTitle = (props) => {
    <ul>
        <li> <h3>{props.title}</h3></li>
    </ul>
   

}

export default Content;
