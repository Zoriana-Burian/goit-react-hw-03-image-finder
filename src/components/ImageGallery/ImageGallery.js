import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
const ImageGallery = ({ hits }) => (
    <ul className={s.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL }) => 
            <ImageGalleryItem key={id} webformatURL={ webformatURL} largeImageURL={ largeImageURL} />)}
      </ul>
)

export default ImageGallery;