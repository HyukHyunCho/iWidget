/*eslint-disable*/
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Card, CardHeader, IconButton, Menu, MenuItem } from '@material-ui/core';

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
    transition: '0.8s',
    backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
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

const PlanCost = styled.div`
    font-size: 2.5rem;
`;

const ITEM_HEIGHT = 48;
const options = [
  '위젯 수정',
  '위젯 삭제',
];

export default function Demo2Widget(props) {

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
          //title={props.widgetInfo.name}
        />

        <Content>
            <PlanCost style={{fontSize: "30px", color: "#fff", float: "left", marginTop: "10px"}}>{props.widgetData}How to</PlanCost>
            <PlanCost style={{fontSize: "30px", color: "#fff", float: "left", marginTop: "10px", opacity:0.8}}>{props.widgetData}Open</PlanCost>
            <PlanCost style={{fontSize: "30px", color: "#fff", float: "left", marginTop: "10px", opacity:0.8}}>{props.widgetData}Control</PlanCost>
            <PlanCost style={{fontSize: "30px", color: "#fff", float: "left", marginTop: "10px", opacity:0.8}}>{props.widgetData}Center</PlanCost>
        </Content>
      </Card>

    </>  
  );
}








