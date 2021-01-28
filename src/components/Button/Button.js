import s from './Button.module.css';
const Button = ({ onButton }) => (
     <button className={s.Button} type='button' onClick={onButton}>Load more</button>
);

export default Button;