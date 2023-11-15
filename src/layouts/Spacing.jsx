import { styles } from "../constants/styles/styles";

const SpacingLayout = ({ children, className }) => {
  return <div className={`${styles.paddingX} ${styles.flexCenter} ${className}`}>{children}</div>;
};

export default SpacingLayout;
