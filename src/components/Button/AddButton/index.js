import classNames from "classnames/bind";
import styles from "./AddButton.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAddButton } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function AddButton({ faicon }) {
  return <FontAwesomeIcon icon={faicon} className={cx("icon")} />;
}

export default AddButton;
