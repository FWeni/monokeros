import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import NavTabs from './navbarTabs';
// import MMIcon from '../../MMIcon.png';


import { ethers } from 'ethers';


function NavBar() {
    const [walletAvail, setWalletAvail] = React.useState(true);
    const [isConnected, setIsConnected] = React.useState(false);
    const [accAddress, setAccAddress] = React.useState('');
    const [accountBalance, setAccountBalance] = React.useState('');

    const { ethereum } = window;
    const provider = new ethers.BrowserProvider(window.ethereum);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    const okayThenClose = () => {
        setOpen(false);
    }

    const action = (
        <React.Fragment>
          <Button color="secondary" size="small" onClick={handleClose}>
            UNDO
          </Button>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );

    React.useEffect(() => {
        const { ethereum } = window;
        const walletAvailability = async () => {
            if(!ethereum) {
                setWalletAvail(false);
                // add the add metamask button
            }
            setWalletAvail(true);
        };
        walletAvailability();
    }, []);
    const connectWallet = async() => {
        try {
            if(!ethereum) {
                setWalletAvail(false);
            }
            const accounts = await ethereum.request({
                method: 'eth_requestAccounts',
            });
            let balance = await provider.getBalance(accounts[0]);
            let bal = ethers.formatEther(balance);

            setAccAddress(accounts[0]);
            setAccountBalance(bal);
            setIsConnected(true);
        } catch (error) {
            setIsConnected(false);
        }
    };
    return(
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Monokeros
                    </Typography>
                    {walletAvail ? (
                        <div>
                            { isConnected ? (
                                <Dialog
                                    open={handleClick}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >

                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        <h3>Wallet Address:</h3>
                                        <p>
                                            {accAddress.slice(0, 4)}...
                                            {accAddress.slice(38, 42)}
                                        </p>
                                        <div className="card-row">
                                            <h3>Wallet Balance:</h3>
                                            <p>{accountBalance}</p>
                                        </div>
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button varient="outlined" onClick={okayThenClose}>Okay</Button>
                                    </DialogActions>
                                </Dialog>
                            ) : (
                                <Button align="end" color="inherit" onClick={connectWallet}>
                                    Login
                                </Button>
                            )}
                            { isConnected ? (
                                <div>
                                    <NavTabs></NavTabs>
                                    <Snackbar
                                        open={open}
                                        autoHideDuration={6000}
                                        onClose={handleClose}
                                        message="Metamask Connected.  🎉"
                                        action={action}
                                    />
                                </div>
                            ) : (
                                <div>
                                    <Snackbar
                                        open={open}
                                        autoHideDuration={6000}
                                        onClose={handleClose}
                                        message="Metamask Not Connected."
                                        action={action}
                                    />
                                </div>
                            )}
                        </div>
                        ) : (
                            <div>
                                {/* <Button variant="outlined" onClick={handleClick}>
                                    Open alert dialog
                                </Button> */}
                                    <Dialog
                                        open={handleClick}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >

                                        <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            To fully utilise the application, please install Metamask.
                                        </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                                        <a href={'https://metamask.io/'}>
                                            <Button variant="outlined" onClick={handleClose} autoFocus>
                                                 Download/Install
                                            </Button>
                                        </a>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                        )}
                </Toolbar>
            </AppBar>
        </Box>
    );

};


export default NavBar;