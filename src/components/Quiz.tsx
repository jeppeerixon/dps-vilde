import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Questions } from '../assets/Questions';

const steps = [
    {
        label: Questions[0].title,
        description: Questions[0].description,
    },
    {
        label: Questions[1].title,
        description: Questions[1].description,
    },
    {
        label: Questions[2].title,
        description: Questions[2].description,
    },
    {
        label: Questions[3].title,
        description: Questions[3].description,
    },
    {
        label: Questions[4].title,
        description: Questions[4].description,
    },
    {
        label: 'Testet Slut!',
        description: `Klicka på Slutför för att se resultatet!' + <button>hej</button>`,
    },
];

function Quiz() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setTotalValue(totalValue + value)
      setValue(0)
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const [value, setValue] = React.useState<number>(0);
    const [totalValue, setTotalValue] = React.useState<number>(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number((event.target as HTMLInputElement).value));
        console.log((event.target as HTMLInputElement).value);
    };

  
    return (
      <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{steps[activeStep].label}</Typography>
        </Paper>
        <Box sx={{ height: 50, maxWidth: 400, p: 2 }}>
          
          <FormControl>
            <FormLabel id="demo-controlled-radio-buttons-group">Svar</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
            >
                <FormControlLabel value={Questions[activeStep].points[0]} control={<Radio />} label="Ja" />
                <FormControlLabel value={Questions[activeStep].points[1]} control={<Radio />} label="Nej" />
            </RadioGroup>
            </FormControl>
        </Box>
        <Box sx={{ height: 255, maxWidth: 400, p: 2 }}>
            {steps[activeStep].description}
        </Box>
        <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
            <Button size="small" onClick={handleNext} disabled={activeStep === 5 || value === 0}>
            Next
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
            </Button>
        }
        backButton={
            <Button size="small" onClick={handleBack} disabled={true}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
            </Button>
        }
        />
      </Box>
    );
  }
  
export default Quiz