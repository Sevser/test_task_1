import styles from './UiButton.module.css';

export function UiButton(props) {
  return <button
    onClick={props.onClick}
    disabled={props.disabled}
    className={styles.button}>
    {props.children}
  </button>
}
