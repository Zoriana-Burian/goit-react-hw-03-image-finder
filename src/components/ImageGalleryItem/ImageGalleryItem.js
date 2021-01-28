import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, largeImageURL, clickOpenModal }) => (
    <li className={s.ImageGalleryItem} >
        <img className={s.ImageGalleryItemImage} src={webformatURL} data-source={largeImageURL} onClick={clickOpenModal} alt=''/>
  </li>
);

export default ImageGalleryItem;