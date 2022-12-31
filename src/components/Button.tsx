import React from 'react'

import './Button.scss'

export type ButtonProps = {
  label: string
}

export function Button(props: ButtonProps) {
  return <button className='btn btn-primary'>{props.label}</button>
}
