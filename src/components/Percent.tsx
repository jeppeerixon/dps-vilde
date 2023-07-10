import * as React from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number },) {

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          fontSize={'2rem'}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel(props: {result: number}) {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    const timer: number = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= props.result ? props.result : prevProgress + 1));
    }, 30);
  }, []);

  return <CircularProgressWithLabel value={progress} size={200}/>;
}