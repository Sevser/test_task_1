import styles from './UiButton.module.css';

export function UiButton(props) {
  return <button className={styles.button}>{props.children}</button>
}
