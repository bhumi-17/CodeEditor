

import Editor from "./editor";
import {Box , styled} from '@mui/material';
import { Datacontext } from "../context/DataProvider";
import { useContext } from "react";
const Container=styled(Box)`
display:flex;
background-color:#060606;
`
const Code=() =>{
    const { html,setHtml,css,setCss,js,setJs} = useContext(Datacontext);
    return  (
      <Container>
        <Editor
            heading="HTML"
            icon="/"
            color="#FF3C41"
            value={html}
            onChange={setHtml}
        />
        <Editor
              heading="CSS"
              icon="*"
              color="blue"
              value={css}
            onChange={setCss}
        />
        <Editor
              heading="JavaScript"
              icon="()"
              color="yellow"
              value={js}
            onChange={setJs}
        />
      </Container>
    )
}
export default Code; 