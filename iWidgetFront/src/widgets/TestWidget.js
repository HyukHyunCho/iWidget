import React, { useState } from 'react'; // component를 사용한다
import styled, {css} from 'styled-components';
import { CardHeader, IconButton, Menu, MenuItem, withStyles, Badge} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

  const gradient = degs => css`
    background: 
    linear-gradient(
      ${degs || 130}deg,
      #264B8B 0%,
      #424242 100%
    );
  `;

  const Card = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    color: white;
    ${gradient()};
    
  `;

  const Content = styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    ${gradient()};
    box-shdow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  `;

  const IconTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    flex: 0 0 auto;
    border-radius: 50%;
    font-size: 8px;
    color: white;
    border: 2px solid #FFFFFF;
    box-shdow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
  `;

      
  const PlanCost = styled.div`
    font-size: 2.5rem;
  `;

  const BackgroundSquare = styled.div`
    position: absolute;
    z-index: 2;
    top: 62%;
    left: 0%;
    width: 200%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-3deg);
` ;

  const options = [
    '위젯 수정',
    '위젯 삭제',
  ];
  
  const ITEM_HEIGHT = 48;
  
export default function TestWidget(props) {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  // 모달(위젯 수정)
  const [openWidgetModal, setOpenWidgetModal] = useState(false);
  const handleWidgetModalClose = () => {
    setOpenWidgetModal(false);
  };

  // 모달(위젯 삭제)
  const [openWidgetDeleteModal, setOpenWidgetDeleteModal] = useState(false);
  const handleWidgetDeleteModalClose = () => {
    setOpenWidgetDeleteModal(false);
  };
  
  const settingOpen = (e) => {
    if(e.target.innerText === "위젯 수정") {
      setOpenWidgetModal(true);
    } else if(e.target.innerText === "위젯 삭제") {
      setOpenWidgetDeleteModal(true);
    } 
  }
  
  return (
    <Card>
      <BackgroundSquare />
      <CardHeader
        avatar={
          // <IconTitle>온도</IconTitle>
          <StyledBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            <IconTitle>온도</IconTitle>
          </StyledBadge>
        }
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
                    <MoreVertIcon style={{color:'#fff'}}/>
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
        subheader="2020-12-18 00:00:00"
      />

      <Content>
        <Icon>
          {/* <img src={temperature} alt="logo" style={{width: "70%", height: "70%"}}/> */}
        </Icon>
        <PlanCost style={{fontSize: props.widgetInfo.font}}>{props.widgetData}℃</PlanCost>
      </Content>


      {/* <WidgetUpdateModal
        dashId={props.dashId}
        widgetId={props.widgetInfo.id}
        open={openWidgetModal}
        close={handleWidgetModalClose}
      /> 

      <WidgetDeleteModal
        id={props.widgetInfo.id}
        dashId={props.dashId}
        open={openWidgetDeleteModal}
        close={handleWidgetDeleteModalClose}
      /> */}

    </Card>

  );
}
