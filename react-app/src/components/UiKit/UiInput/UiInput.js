import styles from './UiInput.module.css';

export function UiInput(props) {
  return <input
    value={props.value}
    className={styles.input}
    placeholder={props.placeholder}
    onInput={(e) => props.onInput(e.target.value)} />
}
