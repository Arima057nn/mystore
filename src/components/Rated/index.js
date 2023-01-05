import classNames from "classnames/bind";
import styles from "./Rated.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Rated() {
  return (
    <div className={cx("star-container")}>
      <FontAwesomeIcon icon={faStar} className={cx("star1")} />
      <FontAwesomeIcon icon={faStar} className={cx("star1")} />
      <FontAwesomeIcon icon={faStar} className={cx("star1")} />
      <FontAwesomeIcon icon={faStar} className={cx("star2")} />
      <FontAwesomeIcon icon={faStar} className={cx("star2")} />
    </div>
  );
}

export default Rated;
