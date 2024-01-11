import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Delete } from '@mui/icons-material';

interface DeleteDialogProps {
  title: string;
  description: string;
  isShort?: boolean
  onConfirm: () => void;
}

export default function DeleteDialog({
  title,
  description,
  onConfirm,
  isShort
}: DeleteDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleConfirm = () => {
    onConfirm();
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {!isShort ? (
        <button
          onClick={handleClickOpen}
          className="w-full flex items-center justify-center font-semibold text-background px-2 py-1 gap-1 bg-red-500 ring-1 ring-red-600 transition-all hover:scale-105 hover:bg-red-300"
        >
          <Delete />
          <span>Deletar</span>
        </button>
      ) : (
        <button
          onClick={handleClickOpen}
          className="text-red-400 hover:text-red-800"
        >
          <Delete />
        </button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
        classes={{ paper: 'bg-background' }}
      >
        <DialogTitle
          id="alert-dialog-title"
          className="text-gray-500 uppercase font-semibold"
        >
          {`Deletar ${title}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="text-gray-300"
          >
            Tem certeza que deseja deletar{' '}
            <span className="text-red-300 font-semibold">{description}</span>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="flex gap-4 p-2">
            <button
              className="text-gray-500 font-semibold px-2 py-1 ring-1 ring-gray-500 transition-all hover:bg-gray-700"
              onClick={handleClose}
              autoFocus
            >
              CANCELAR
            </button>
            <button
              className="text-gray-800 font-semibold px-2 py-1 ring-1 ring-red-600 bg-red-500 transition-all hover:bg-red-300"
              onClick={handleConfirm}
            >
              DELETAR
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
