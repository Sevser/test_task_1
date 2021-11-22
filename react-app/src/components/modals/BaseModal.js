import React from 'react';
import styles from './BaseModal.module.css';
function Header() {
  return null
}

function Body() {
  return null
}

function Footer() {
  return null
}

class BaseModal extends React.Component {
  static Header = Header
  static Body = Body
  static Footer = Footer
  constructor(props) {
    super(props);

    this.hideModal = this.hideModal.bind(this);
  }

  hideModal() {
    if (this.props.hideModal && typeof this.props.hideModal === 'function') {
      this.props.hideModal();
    }
  }

  render() {
    const {children} = this.props
    const header = (children && children.find && children.find(child => child.type === Header)) || null;
    const body = (children && children.find && children.find(child => child.type === Body)) || null;
    const footer = (children && children.find && children.find(child => child.type === Footer)) || null;

    return (
      <div className={styles['modal-container']}>
        <div
          onClick={this.hideModal}
          className={styles.overlay}/>
        <div className={styles.container}>
          <div className={styles.header}>
            {header ? header.props.children : null}
          </div>
          <div className={styles.body}>
            {body ? body.props.children : null}
          </div>
          <div className={styles.footer}>
            {footer ? footer.props.children : null}
          </div>
        </div>
      </div>
    )
  }
}

export default BaseModal;
