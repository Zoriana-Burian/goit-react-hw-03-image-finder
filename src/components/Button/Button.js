import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onButton }) => (
    <div className={s.Butt}>
        <button className={s.Button} type='button' onClick={onButton}>Load more</button> 
    </div>
        
);

Button.propTypes = {
  onButton: PropTypes.func.isRequired,
};

export default Button;




