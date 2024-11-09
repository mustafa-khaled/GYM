import styles from "./Spinner.module.css";

function Spinner({ className }) {
  return (
    <div className={`flex h-[90vh] items-center justify-center ${className}`}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Spinner;
