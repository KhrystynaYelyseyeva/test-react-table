import React, { useState, useEffect } from 'react'
import './Cell.css'

const MAX_CELL_HEIGHT = '100';
const MAX_TEXT_LENGTH = 200;

export const Cell = ({ text }) => {
  const [showText, setShowText ] = useState(false);
  const [showButton, setShowButton ] = useState(false);

  useEffect(() => {
    if (text.length > MAX_TEXT_LENGTH) {
      setShowButton(true)
    }
  },[])

  const toggleVisibility = ({target}) => {
    const parent = target.parentElement

    if (parent.style.maxHeight !== '100%') {
      parent.style.maxHeight = '100%'
    } else {
      parent.style.maxHeight = MAX_CELL_HEIGHT + 'px'
    }

    setShowText(prevState => !prevState)
  }

  return (
    <div
      className={ text ? 'cell' : 'cell--hide'}
    >
      <p className="text">
        {text}
      </p>
      {showButton && (
        <button
          className='button'
          onClick={toggleVisibility}
        >
          { showText ? 'Hide' : '...'}
        </button>
        )
      }
    </div>
  )
}