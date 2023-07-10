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
        <p>
          <i>Framtagen från Fredrik Furtenbachs del i avsnitt "Därför saknar debatter politiskt innehåll" från den 6 juli 2023.</i>
        </p>
      </>
    )
  }
  
  export default Start