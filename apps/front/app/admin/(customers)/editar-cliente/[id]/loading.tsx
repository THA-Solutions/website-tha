import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div className="w-full flex items-center justify-center">
      <CircularProgress color="primary" />
    </div>
  );
}
