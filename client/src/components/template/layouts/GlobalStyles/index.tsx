import React from 'react'
import './GlobalStyles.scss'

interface IGlobalStylesProp  {
    children:React.ReactNode
}

const globalStyles = ({children}:IGlobalStylesProp) => {
  return (
    <div>{children}</div>
  )
}

export default globalStyles