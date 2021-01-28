import s from './Button.module.css';
const Button = ({ onButton }) => (
    <div className={s.Butt}>
        <button className={s.Button} type='button' onClick={onButton}>Load more</button> 
    </div>
        
);

export default Button;