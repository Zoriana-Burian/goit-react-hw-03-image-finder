import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
const ImageGallery = ({ hits, clickOpenModal }) => (
    <ul className={s.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL }) => 
            <ImageGalleryItem key={id} webformatURL={ webformatURL} largeImageURL={ largeImageURL} clickOpenModal={clickOpenModal} />)}
      </ul>
)

export default ImageGallery;