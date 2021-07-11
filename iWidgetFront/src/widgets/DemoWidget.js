/*eslint-disable*/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled, {css} from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// image
import img from 'images/icon_wt_05.svg';

//import WidgetUpdateModal from '../components/WidgetUpdateModal';
//import WidgetDeleteModal from '../components/WidgetDeleteModal';

const useStyles = makeStyles({
  card: {
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    borderRadius: 25,
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    backgroundSize: '200%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '0.6s',
    //backgroundImage: 'linear-gradient(45deg, #76B5FF, #EE5A24, #00a8ff)',
    backgroundImage: 'linear-gradient(#3388C1, #60A5CC, #3DB7CC)',
    '&:hover': {
        backgroundPosition: 'right'
    }
  }
});

const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-left: 26px;
  `;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    height: 25%;
    flex: 0 0 auto;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    
    box-shdow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

const PlanCost = styled.div`
    font-size: 2.5rem;
`;

const IconTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    flex: 0 0 auto;
    margin-bottom: 1rem;
    border-radius: 50%;
    font-size: 18px;
    color: white;
    border: 2px solid #FFFFFF;
    box-shdow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
`;

const options = [
  '위젯 수정',
  '위젯 삭제',
];

const ITEM_HEIGHT = 48;

export default function DemoWidget(props) {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader 
          style={{color: "#fff"}}
          action={
            <div>
              {
                props.setting === "on"
                ? <div>
                <IconButton
                  aria-label="more"
                  aria-controls="long-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <MoreVertIcon style={{color: "#fff"}} />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '20ch',
                    },
                  }}
                  >
                  {
                    options.map((option) => (
                      <MenuItem 
                        key={option}
                        value={option}
                        onClick={ 
                          (event) => settingOpen(event)
                        }
                      >
                        {option}
                      </MenuItem>
                    ))
                  }
                </Menu>
                </div>
                : null
              }
            </div>
          }
          title={props.widgetInfo.name}
          //subheader="2020-12-18 00:00:00"
        /> 
        <Content>
          <PlanCost style={{fontSize: "46px", color: "#fff", float: "left"}}>{props.widgetData}29℃</PlanCost>
          <img src={img} alt="logo" style={{width: "15%", height: "15%", marginTop: "20px"}}/>
          <PlanCost style={{fontSize: "18px", color: "#fff"}}>{props.widgetData}한때 흐림</PlanCost>
          <PlanCost style={{fontSize: "18px", color: "#fff"}}>{props.widgetData}H:29˚ L:22˚</PlanCost>
        </Content>

      </Card>

    </> 
  );
}