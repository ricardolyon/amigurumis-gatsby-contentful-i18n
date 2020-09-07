import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'gatsby';
import LangIcon from '@material-ui/icons/Language'
import { MenuItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuText: {
    color: '#fff'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {['Home', 'About', 'Contact', 'Register', 'Catalog'].map((el, idx) => {
            const slug = (el === 'Home' ? '/' : el.toLocaleLowerCase())
            return <Link to={slug} key={idx}>
              <Typography variant="h6" className={`${classes.menuButton} ${classes.menuText}`}>
                {el}
              </Typography>
            </Link>
          })}
          <MenuItem>
            <LangIcon />
          </MenuItem>
        </Toolbar>
      </AppBar>
    </div>
  );
}
