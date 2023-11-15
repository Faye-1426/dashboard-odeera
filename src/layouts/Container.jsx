import { styles } from "../constants/styles/styles";

const Container = ({ children, className }) => {
  return <div className={`w-full ${styles.boxWidth} ${className}`}>{children}</div>;
};

export default Container;
