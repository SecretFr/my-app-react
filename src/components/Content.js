/* eslint-disable */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
}));

export default function Content() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <div>
            <Button className={classes.button} onClick={handleOpen}>
                Open the select
            </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                    FrontEnd
                </InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={name}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={'HTML'}>HTML</MenuItem>
                    <MenuItem value={'REACT'}>REACT</MenuItem>
                    <MenuItem value={'JAVASCRIPT'}>JAVASCRIPT</MenuItem>

                </Select>
            </FormControl>
            <article>
                <h2>{name}</h2>
                <p>Use Material-UI Button</p>
            </article>
        </div>
    )
}