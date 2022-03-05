import React from "react";
import {Button, Autocomplete, TextField} from "@mui/material";

const App = () => {
  const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];
    return (
        <div className="App">
            <Button variant="outlined" type="submit">Hello World</Button>
            <div style={{padding: "10px"}}/>

            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                )}
            />
        </div>
    );
};

export default App;
