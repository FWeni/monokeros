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

// import Slides from '../body/picSlides';
import HomePage from '../../pages/tabs/homePage';



import { ethers } from 'ethers';


function NavBar() {
    const [walletAvail, setWalletAvail] = React.useState(true);
    const [isConnected, setIsConnected] = React.useState(false);
    const [accAddress, setAccAddress] = React.useState('');
    const [accountBalance, setAccountBalance] = React.useState('');

    const { ethereum } = window;
    const provider = new ethers.BrowserProvider(window.ethereum);

    const [open, setOpen] = React.useState(true);
    const [openDialog, setOpenDialog] = React.useState(true);

    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

    // const popOpen = () => {
    //     setOpenDialog(true);
    // };

    const okayClose = () => {
        setOpenDialog(false);
    };

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
                    <Typography align='center' variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Monokeros
                    </Typography>
                    {walletAvail ? (
                        <div>
                            { isConnected ? (
                                <Dialog
                                    open={openDialog}
                                    onClose={okayClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >

                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            <div>
                                                <h3>Wallet Address:</h3>
                                                <p>
                                                    {accAddress.slice(0, 4)}...
                                                    {accAddress.slice(38, 42)}
                                                </p>
                                            </div>
                                            <div className="card-row">
                                                <h3>Wallet Balance:</h3>
                                                <p>{accountBalance}</p>
                                            </div>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button varient="outlined" onClick={okayClose}>Okay</Button>
                                    </DialogActions>
                                </Dialog>
                            ) : (
                                <Button align="end" color="inherit" onClick={connectWallet} >
                                    Login
                                </Button>
                            )}
                            { isConnected ? (
                                <div>
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
                                    <Dialog
                                        open={openDialog}
                                        onClose={okayClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >

                                        <DialogContent>
                                            <DialogContentText id="alert-dialog-description">
                                                To fully utilise the application, please install Metamask.
                                            </DialogContentText>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button variant="outlined" onClick={okayClose}>Cancel</Button>
                                            <a href={'https://metamask.io/'}>
                                                <Button variant="outlined" onClick={okayClose} autoFocus>
                                                    Download/Install
                                                </Button>
                                            </a>
                                        </DialogActions>
                                    </Dialog>
                                </div>
                        )}
                </Toolbar>
            </AppBar>
            {/* <Slides></Slides> */}
            <HomePage></HomePage>
        </Box>
    );

};


export default NavBar;