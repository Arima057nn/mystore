import classNames from "classnames/bind";
import styles from "./AddDisable.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

function AddDisable({ faicon }) {
  const showBtn = () => {
    // AnimationEvent
  };
  return (
    <FontAwesomeIcon icon={faicon} className={cx("icon")} onClick={showBtn} />
  );
}

export default AddDisable;
