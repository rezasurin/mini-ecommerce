import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from '@material-ui/core'
import { Typography } from '@material-ui/core';

export default function FormDialog({isOpen, setOpen}) {
  // const [open, setOpen] = React.useState(false);
  const [registered, setRegistered] = useState(false)
  const [register, setRegister] = useState(false)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setRegister(false)
    setOpen(false);
  };

  const handleSignUp = () => {
    setRegister(false)
    setRegistered(true)
  }

  return (
    <div>
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login or Sign Up</DialogTitle>
        {
          !register ? (
            <div>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
              <div align="right" style={{marginRight: 20}}>
                <Link href="#">Forgot password?</Link>
              </div>
              <span style={{marginLeft: 20}}>
                <Typography variant="caption">Not a member?</Typography>
                <Link onClick={() => setRegister(true)}><Typography variant="caption"> Sign Up</Typography></Link>
              </span>
            </div>
          )
          :
          (
            <div>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Name"
                  type="text"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                />
              </DialogContent>
            </div>
          )
        }
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {
            !register ? (
            <Button onClick={handleClose} color="primary">
              Login
            </Button>
            ) : (
              <Button onClick={handleSignUp} color="primary">
              Sign Up
            </Button>
            )
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}