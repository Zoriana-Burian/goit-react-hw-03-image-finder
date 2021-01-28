import PropTypes from 'prop-types';
import s from './Section.module.css';

function Section({ children }) {
  return (
    <div className={s.section}>
         {children}
     
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;