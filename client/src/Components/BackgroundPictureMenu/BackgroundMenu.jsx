import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StyleIcon from '@material-ui/icons/Style';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="White Background White Flowers" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Blue Background With Flowers" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="White Background Pink Flowers" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="White Flower Background" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Pink And White Striped Background" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Wood Background Flower Header" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="White Background Green Leaf Header" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Green Background Tree Design" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Wood Background Pink Flower Header" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="White Background Fall Leaf Header" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Yellow Background White Flower Footer" />
        </StyledMenuItem>

        <StyledMenuItem>
          <ListItemIcon>
            <StyleIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Mint Wood Background Pink Flowers" />
        </StyledMenuItem>

      </StyledMenu>
    </div>
  );
}