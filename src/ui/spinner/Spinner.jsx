import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className="flex h-[100vh] items-center justify-center">
      <div class={styles.loader}></div>
    </div>
  );
}

export default Spinner;
