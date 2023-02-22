import { useContext } from 'react' // not needed since it's imported from parent
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery() {
    const data = useContext(DataContext)
    const display = data.map((item, i)=> {
        return (
            <GalleryItem item={item} key={i} />
        )
    })

  return (
    <div>
        {display}
    </div>
  )
}

export default Gallery