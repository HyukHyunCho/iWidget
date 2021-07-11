import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// image
import img from 'images/icon_wt_05.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //maxWidth: '36ch',
    //backgroundColor: theme.palette.background.paper,
    color: '#000',
    borderRadius: "20px",
    backgroundColor: "#EAEAEA"
  },
  inline: {
    display: 'inline',
  },
}));

export default function Demo3Widget() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
      
        <img src={img} alt="logo" style={{width: "50px", height: "50px"}}/>
      
        <ListItemText
          primary="1일 날씨"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                맑고 화창한 날씨
              </Typography>
            {/* {" — Wish I could come, but I'm out of town this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <img src={img} alt="logo" style={{width: "50px", height: "50px"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="2일 날씨"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                맑고 화창하다가 오후에 비
              </Typography>
              {/* {" — Wish I could come, but I'm out of town this…"} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <img src={img} alt="logo" style={{width: "50px", height: "50px"}}/>
        </ListItemAvatar>
        <ListItemText
          primary="3일 날씨"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                여름 날씨
              </Typography>
              {/* {' — Do you have Paris recommendations? Have you ever…'} */}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}