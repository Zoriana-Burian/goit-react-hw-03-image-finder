import s from './ImageGalleryItem.module.css';
const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => (
    <li className={s.ImageGalleryItem} key={id}>
         <a href={webformatURL}><img className={s.ImageGalleryItemImage} src={largeImageURL} alt=''/></a>
  </li>
);

export default ImageGalleryItem;