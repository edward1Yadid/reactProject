import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { bool, func } from "prop-types";

const Banner = ({ isDialogOpen, handleDIalogPopUp, OnDeleteCard }) => {
  return (
    <Box>
      <Dialog hideBackdrop open={isDialogOpen} onClose={handleDIalogPopUp} aria-braillelabel="alert-dialog-title" aria-describedby="alert-dialog-content">
        <DialogTitle id="alert-dialog-title">Delte card</DialogTitle>
        <DialogContent id="alert-dialog-content">
          <DialogContentText>
            Are you sure you want to delete your stored card information? This
            action is irreversible and will remove all saved card details
            associated with your account. If you proceed, you will need to
            re-enter your card information for future transactions.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDIalogPopUp} variant="filled" sx={{color:"blue"}}>Cancel</Button>
          <Button onClick={OnDeleteCard}  variant="filled" sx={{color:"red"}}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
Banner.propTypes={
    isDialogOpen:bool.isRequired,
    OnDeleteCard:func.isRequired,
    handleDIalogPopUp:func.isRequired

}

export default Banner;
