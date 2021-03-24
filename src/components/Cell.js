import React, { useState, useEffect, useRef } from 'react';

import { Grid, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { makeStyles } from '@material-ui/core/styles';
import { NavigateBeforeSharp } from '@material-ui/icons';

const useStyles = makeStyles({
  expanded: {
    overflow: 'hidden',
    textOverflow: 'initial',
    whiteSpace: 'normal', 
  },
  collapsed: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap', 
  },
});

export const Cell = ({ text }) => {
  const [expandText, setExpandText ] = useState(false);
  const [showButton, setShowButton ] = useState(false);

  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    checkWidth();
  }, [])
  
  const checkWidth = () => {
    setShowButton(contentRef.current.offsetWidth > containerRef.current.offsetWidth);
  }

  const toggleVisibility = () => {
    setExpandText(prevState => !prevState)
  }

  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      wrap='nowrap'
      justify='space-between'
      alignItems={ expandText ? 'flex-end' : 'center' }
      style={{maxWidth: 150}}
    >
      <Grid item
        ref={containerRef}
        className={expandText ? classes.expanded : classes.collapsed}
      >
        <span ref={contentRef} style={{padding: 8}}>
          { text || " " }
        </span>
      </Grid>
      {showButton && (
        <Grid item>
          <IconButton
            size='small'
            onClick={toggleVisibility}
          >
            { expandText ? <ExpandLessIcon fontSize='small' /> : <ExpandMoreIcon fontSize='small' />}
          </IconButton>
        </Grid>
        )
      }
    </Grid>
  )
}