import React from 'react'
import "./button.scss"

export const Button = ({edit, classN} ) => {
  return (
    <div>
        <button className={classN}>{edit}</button>
    </div>
  )
}
