import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, clickOpenModal }) => (
    <li className={s.ImageGalleryItem} >
        <img className={s.ImageGalleryItemImage} src={webformatURL} data-source={largeImageURL} onClick={clickOpenModal} alt=''/>
  </li>
);

ImageGalleryItem.propTypes = {
    clickOpenModal: PropTypes.func.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;