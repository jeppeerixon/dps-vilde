import { MouseEventHandler } from "react";
import CircularWithValueLabel from "./Percent"
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Button } from "@mui/material";

function Result(props: {handleAgainClick: MouseEventHandler<HTMLButtonElement> | undefined ,value: number}) {

    return (
      <>
        <h1>
          Resultat
        </h1>
        <CircularWithValueLabel result={props.value}/>
        <p>
          <InfoOutlinedIcon /><br></br>
          <i>
            Resultatet visas i procent 0 till 100, högre procent betyder större sannolikhet att bli politisk vilde.
          </i>
        </p>
        <Button variant="contained" onClick={props.handleAgainClick}>Spela igen</Button>
      </>
    )
  }
  
export default Result