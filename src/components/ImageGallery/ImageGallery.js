import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ hits, clickOpenModal }) => (
    <ul className={s.ImageGallery}>
        {hits.map(({ id, webformatURL, largeImageURL }) => 
            <ImageGalleryItem key={id} webformatURL={ webformatURL} largeImageURL={ largeImageURL} clickOpenModal={clickOpenModal} />)}
      </ul>
)

ImageGallery.propTypes = {
    clickOpenModal: PropTypes.func.isRequired,
    hits: PropTypes.array.isRequired,
};

export default ImageGallery;