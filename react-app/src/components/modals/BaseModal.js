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
          <div
            onClick={this.hideModal}
            className={styles['close-button']}>
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="1.35355" y1="0.646447" x2="19.3536" y2="18.6464" stroke="black"/>
              <line x1="0.646447" y1="18.6464" x2="18.6464" y2="0.646446" stroke="black"/>
            </svg>
          </div>
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
