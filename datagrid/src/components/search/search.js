import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './search.css';

export default function Search() {
  return (
    <React.Fragment>
      <TextField
        id="filled-full-width"
        placeholder="Search by name"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <Button variant="outlined">Default</Button>
    </React.Fragment>
  )
}
