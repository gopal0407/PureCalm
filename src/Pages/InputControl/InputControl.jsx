
import PropTypes from "prop-types";
import styles from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={styles.container}>
      {props.label && <label>{props.label}</label>}
      <input type="text" {...props} />
    </div>
  );
}

InputControl.propTypes = {
  label: PropTypes.string,
};

export default InputControl;
