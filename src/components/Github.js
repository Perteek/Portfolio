import React from 'react'

const Github = (props) => {
  return (
    <div>
      <a href={props.url} target='_blank' rel="noopener noreferrer">
      <img
        src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
        alt={props.alt}
        style={{ width: '50px', borderRadius: '50%',marginLeft:"0.5vw" }}
      />
      </a>
    </div>
  )
}

export default Github
