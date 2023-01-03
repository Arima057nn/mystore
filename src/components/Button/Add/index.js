import classNames from "classnames/bind";
import styles from "./Add.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAdd } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Add({ faicon }) {
  return <FontAwesomeIcon icon={faicon} className={cx("icon")} />;
}

export default Add;
