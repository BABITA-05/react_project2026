import React from 'react'
import useFetch from './My_custom_hook'

const Gallery = () => {
  const [gallery, setGallery] = useFetch("https://jsonplaceholder.typicode.com/photos")
  return (
    <div>
      <h1>Gallery:</h1>
      {
        gallery.map(
          (album)=>{
            return(
              <p key={album.id}>{album.title}</p>
            )
          }
        )
      }
    </div>
  )
}

export default Gallery