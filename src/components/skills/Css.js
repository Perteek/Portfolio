import React from 'react'

const Css = ({src,alt}) => {
  return (
    <div>
      <img
        src={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"}
        alt={alt}
        style={{ width: '50px', borderRadius: '50%',marginLeft:"1.50vw" }}
      />
    </div>
  )
}

export default Css
