import React from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Categorias from '../../shared/products';

const CategoriaItem = () => {

    const [open, setOpen] = React.useState(false);
    const [abrir, setAbrir] = React.useState(false);
    const [car, setCar] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const cate2 = () => {
        setAbrir(!abrir);
    };

    const cate3 = () => {
        setCar(!car);
    }
    const listItems = Categorias.map((categorias)=>
        <li>{Categorias.nombre}</li>
    )

  return (
    <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary='{listItems}' />
                {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>

        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>


        


        <ListItemButton onClick={cate2}>
            <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Herramientas" />
                {abrir ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={abrir} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>

        <Collapse in={abrir} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>

        <Collapse in={abrir} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>







        <ListItemButton onClick={cate3}>
            <ListItemIcon>
                <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Repuestos" />
                {car ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        
        <Collapse in={car} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>

        <Collapse in={car} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>

        <Collapse in={car} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
        </Collapse>
    </>
  )
}

export default CategoriaItem
