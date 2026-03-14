import React from 'react'

const Card = ({ data }) => {
  return (
    <img
      src={data.download_url}
      alt=""
      className="w-full h-full object-cover rounded-lg"
    />
  )
}

export default Card


// {console.log(props.data.url)}