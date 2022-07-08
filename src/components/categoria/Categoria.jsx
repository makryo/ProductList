import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import CategoriaItem from '../CategoriaItem/CategoriaItem';

const Categoria = () => {

    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

  return (
    <div>
        <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
            Categorías
            </ListSubheader>
        }
        >
            <CategoriaItem />
        </List>
    </div>
  )
}

export default Categoria;
