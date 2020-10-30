import React, { Children } from 'react'
import './style.scss'

const Button = ({children, ...otherProps}) =>{
    return (
        <button className="btan btn-primary" {...otherProps}>
            {children}
        </button>
    )
} 
export default Button