import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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
      label: Questions[4].title,
      description: Questions[4].description,
  },
];

function Quiz(props: { handleGameOver: (arg0: number) => void; }) {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      if (activeStep === 4) {
        props.handleGameOver(totalValue + value)
        console.log('Game Over!')
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setTotalValue(totalValue + value)
        setValue(0)
      }
      
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
      <>
        <h3>{steps[activeStep].label}</h3>
        <div>
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
        </div>
        <p>
          <InfoOutlinedIcon /><br></br>
          <i>
            {steps[activeStep].description}
          </i>
        </p>
        <MobileStepper
        variant="progress"
        steps={6}
        position="static"
        activeStep={activeStep}
        sx={{ minHeight: 75, width: 1, minWidth: 350, }}
        nextButton={
            <Button size="large" onClick={handleNext} disabled={activeStep === 5 || value === 0}>
            {activeStep === 4 ? 
              'Slutför':
              'Next'
            }
            {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
            </Button>
        }
        backButton={
            <Button size="medium" onClick={handleBack} disabled={true}>
            {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            Back
            </Button>
        }
        />
      </>
    );
  }
  
export default Quiz