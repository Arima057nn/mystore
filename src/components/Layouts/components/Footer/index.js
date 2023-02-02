import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("about")}>
          <h2>Về Chúng Tôi</h2>
          <p>Thuc hanh lap trinh web ... </p>
          <ul className={cx("social-icon")}>
            <li>
              <a href="">
                <i className={cx("fa fa-facebook")}></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className={cx("fa fa-twitter")}></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className={cx("fa fa-instagram")}></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className={cx("fa fa-youtube")}></i>
              </a>
            </li>
          </ul>
        </div>

        <div className={cx("links")}>
          <h2>Đường Dẫn</h2>
          <ul>
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>
              <a href="#">Về Chúng Tôi</a>
            </li>
            <li>
              <a href="#">Thông Tin Liên Lạc</a>
            </li>
            <li>
              <a href="#">Dịch Vụ</a>
            </li>
            <li>
              <a href="#">Điều Kiện Chính Sách</a>
            </li>
          </ul>
        </div>

        <div className={cx("contact")}>
          <h2>Thông Tin Liên Hệ</h2>
          <ul className={cx("info")}>
            <li>
              <span>
                <i className={cx("fa fa-map-marker")}></i>
              </span>
              <span>
                So 1 Dai Co Viet
                <br />
                Quận Hai Ba Trung, Thanh pho Ha Noi
                <br />
                Viet Nam{" "}
              </span>
            </li>
            <li>
              <span>
                <i className={cx("fa fa-phone")}></i>
              </span>
              <p>
                <a href="#">+84 123 456 789</a>
                <br />
                <a href="#">+84 987 654 321</a>
              </p>
            </li>
            <li>
              <span>
                <i className={cx("fa fa-envelope")}></i>
              </span>
              <p>
                <a href="#">diachiemail@gmail.com</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
