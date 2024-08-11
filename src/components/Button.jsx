import React from 'react'
import './Button.scss';

const Button = (props) => {
  const buttonClass=`button button-${props.variant} `;
  return (
    <div className={buttonClass}>{props.label}
    </div>
  )
}

export default Button