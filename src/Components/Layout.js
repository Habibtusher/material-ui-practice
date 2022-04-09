import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useHistory,useLocation } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 240;
const useStyles = makeStyles((theme)=>{
  return{
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding:theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
    },
    drawePaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active:{
        background:'#f4f4f4'
    },
    title:{
      padding:theme.spacing(2)
    },
    appbar:{
      width:`calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date:{
      flexGrow:1
    },
    avatar:{
      marginLeft:theme.spacing(2)
    }
  }
  
});
const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      {/* app bar */}
      <AppBar 
      className={classes.appbar}
      elevation={0}
      variant="secondary"
      >
        <Toolbar>
          <Typography className={classes.date}>Today is {format(new Date(),'do MMMM Y')}</Typography>
        <Typography>Habib</Typography>
        <Avatar className={classes.avatar} src="/ha.jpg"/>
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawePaper }}
      >
        <div>
          <Typography 
          className={classes.title} 
          variant="h5">
            Ninja Notes
          </Typography>
        </div>
        {/* list/links */}

        <List>
          {menuItems.map((item) => (
            <ListItem 
            key={item.text}
            button
            onClick={()=>history.push(item.path)}
            className={location.pathname == item.path ? classes.active : null}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}/>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
        </div>
    </div>
  );
};

export default Layout;
