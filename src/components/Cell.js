import React, { useState, useEffect, useRef } from 'react';

import { Grid, Paper } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';


export const Cell = ({ text }) => {
  const [expandText, setExpandText ] = useState(false);
  const [showButton, setShowButton ] = useState(false);
  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    checkWidth();
  }, [])

  const checkWidth = () => {
    setShowButton(contentRef.current.offsetHeight > containerRef.current.offsetHeight);
  }

  const toggleVisibility = () => {
    setExpandText(prevState => !prevState)
  }

  return (
    <Grid container style={{display:'flex'}}>
      <Grid
        item
        style={{
          maxWidth: '250px',
          height: expandText ? '100%' : '24px',
          overflow: expandText ? 'inherit' : 'hidden',
        }}
        ref={containerRef}
      >
        <span ref={contentRef}>
          {text}
        </span>
      </Grid>
      {showButton && (
        <Grid item style={{alignSelf: 'flex-end'}}>
          <button
            onClick={toggleVisibility}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
            }}
          >
            { expandText ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          </button>
        </Grid>
        )
      }
    </Grid>
    // <div style={{display: 'flex'}}>
    //   <div style={{maxWidth: '250px', maxHeight: '110px', overflow: showText ? 'inherit' : 'hidden'}} ref={containerRef}>
    //     <span ref={contentRef}>
    //       primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla
    //     </span>
    //   </div>
    //   {showButton && (
    //      <Grid item>
    //        <button onClick={toggleVisibility}>
    //          { showText ? 'Hide' : '...'}
    //        </button>
    //      </Grid>
    //      )
    //    }
    // </div>

  )
}