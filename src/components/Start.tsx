import { Button } from "@mui/material"
import { MouseEventHandler } from "react";

function Start(props: { handleStartClick: MouseEventHandler<HTMLButtonElement> | undefined; }) {

    return (
      <>
        <p>
            Sitter du i riksdagen? 
        </p>
        <p>
            Är du i riskzonen för att bli nästa vilde?
        </p>
        <p>
            Testa dig själv här!
        </p>
        <Button variant="contained" onClick={props.handleStartClick}>Start</Button>
      </>
    )
  }
  
  export default Start