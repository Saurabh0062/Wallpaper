import React from 'react'

const Card = ({ data }) => {
  return (
    <a href={data.download_url} target="_blank" rel="noopener noreferrer">
    <img
      src={data.download_url}
      alt=""
      className="w-full h-full object-contain rounded-lg"
    />
  </a>
  )
}

export default Card


// {console.log(props.data.url)}