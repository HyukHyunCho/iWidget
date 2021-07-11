// /*eslint-disable*/
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import styled from 'styled-components';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';

// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


// import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import MoreVertIcon from '@material-ui/icons/MoreVert';


// import { render } from 'react-dom'
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'


// const useStyles = makeStyles({
//   card: {
//     width: '100%',
//     height: '100%',
//     top: '50%',
//     left: '50%',
//     borderRadius: 25,
//     position: 'absolute',
//     transform: 'translate(-50%, -50%)',
//     backgroundSize: '200%',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     transition: '0.8s',
//     backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
//     '&:hover': {
//         backgroundPosition: 'right'
//     }
//     // backgroundImage: 'linear-gradient(45deg, #FFC312, #EE5A24, #00a8ff)',
//     // '&:hover': {
//     //     backgroundPosition: 'right'
//     // }
//   }
// });
// const Content = styled.div`
//     position: relative;
//     z-index: 3;
//     display: flex;
//     flex-direction: column;
//     align-items: left;
//     margin-left: 26px;
//   `;

// const PlanCost = styled.div`
//     font-size: 2.5rem;
// `;

// const IconTitle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 30px;
//   height: 30px;
//   flex: 0 0 auto;
//   margin-bottom: 1rem;
//   border-radius: 50%;
//   font-size: 18px;
//   color: white;
//   border: 2px solid #FFFFFF;
//   box-shdow: 0 11px 15px -7px rgba(0, 0, 0, 0.25);
// `;

// const chartOptions = {
//   title: {
//     text: 'My chart'
//   },
//   series: [{
//     data: [1, 2, 3]
//   }]
// }

// const ITEM_HEIGHT = 48;
// const options = [
//   '위젯 수정',
//   '위젯 삭제',
// ];

// export default function StockChartWidget(props) {
//   const classes = useStyles();
 
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   // 모달(위젯 수정)
//   const [openWidgetModal, setOpenWidgetModal] = useState(false);
//   const handleWidgetModalClose = () => {
//     setOpenWidgetModal(false);
//   };

//   // 모달(위젯 삭제)
//   const [openWidgetDeleteModal, setOpenWidgetDeleteModal] = useState(false);
//   const handleWidgetDeleteModalClose = () => {
//     setOpenWidgetDeleteModal(false);
//   };

//   const settingOpen = (e) => {
//     if(e.target.innerText === "위젯 수정") {
//       setOpenWidgetModal(true);
//     } else if(e.target.innerText === "위젯 삭제") {
//       setOpenWidgetDeleteModal(true);
//     } 
//   }

//   return (
    
//       <Card className={classes.card}>
//         <CardHeader
//           style={{color: "#ff0"}}
//           action={
//             <div>
//               {
//                 props.setting === "on"
//                 ? <div>
//                 <IconButton
//                   aria-label="more"
//                   aria-controls="long-menu"
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                 >
//                   <MoreVertIcon style={{color: "#fff"}} />
//                 </IconButton>
//                 <Menu
//                   id="long-menu"
//                   anchorEl={anchorEl}
//                   keepMounted
//                   open={open}
//                   onClose={handleClose}
//                   PaperProps={{
//                       style: {
//                       maxHeight: ITEM_HEIGHT * 4.5,
//                       width: '20ch',
//                       },
//                   }}
//                   >
//                   {
//                     options.map((option) => (
//                       <MenuItem 
//                         key={option}
//                         value={option}
//                         onClick={ 
//                           (event) => settingOpen(event)
//                         }
//                       >
//                         {option}
//                       </MenuItem>
//                     ))
//                   }
//                 </Menu>
//                 </div>
//                 : null
//               }
//             </div>
//           }
//           //title={props.widgetInfo.name}
//         />

//         <Content>
//           <HighchartsReact
//             highcharts={Highcharts}
//             options={chartOptions}
//           />
//         </Content>
//       </Card>

   
//   );
// }








