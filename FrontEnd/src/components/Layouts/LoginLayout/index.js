import classNames from "classnames/bind";
import styles from "./LoginLayout.module.scss";

const cx = classNames.bind(styles);

function LoginLayout({ content }) {
  return <div>{content}</div>;
}

export default LoginLayout;
