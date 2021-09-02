import React ,{useState, useEffect} from 'react'

// @material-ui/core
import { makeStyles, Menu, MenuItem, IconButton, Card, CardHeader, CardContent, Button } from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomSelectBox from "components/CoustomSelectBox/CustomSelectBox.js"
import DashModal from "components/Modal/DashModal.js"

// api
import axios from 'axios';

// gridstack
import GridStackControllerEdit from "gridstack/GridStackControllerEdit.js";

// redux
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    flexGrow: 1,
    margin: '8px',
    background: "#2F3B49",
    color: "#fff",
  },
  button: {
    width: "100%",
    backgroundColor: '#00acc1',
    '&:hover': {
      backgroundColor: '#00CBE6',
    }
  },
}));

function DashboardEdit({reducer}) {
  
  const classes = useStyles();
  const [dashId, setDashId] = useState(0);
  //const [db, setDB] = useState(null);

  // 설정 버튼
  const [anchorEl, setAnchorEl] = useState(null);
  const openSetting = Boolean(anchorEl);
  const options = [
    '위젯 추가',
    '대시보드 수정',
    '대시보드 삭제',
  ];
  // 위젯 설정
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };
  const ITEM_HEIGHT = 48;

  // 모달(대시보드 추가)
  const [openDashAddModal, setOpenDashModal] = useState(false);
  const [dashModalType, setDashModalType] = useState();
  const handleDashModalOpen = () => {
    setOpenDashModal(true);
  };
  const handleDashAddModalClose = () => {
    setOpenDashModal(false);
  };

  useEffect( () => {

    // axios.post('http://localhost:8080/dashboard/get')
    //   .then((result) => { 

    //     console.log(result);
        
    //   })
    //   .catch(error => {
    //     alert(error);
    //     throw new Error(error);
    //   }
    // );

    // axios.get('http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=7ae87beac78e68f74c38e26c2f779f84')
    //   .then((result) => {
    //     //console.log(result);
    //   })
    //   .catch(() => {
    //     console.log("실패");
    //   }
    // )

    // axios.post('http://localhost:8080/dashboard/list', 
    //     { 
    //       dashid: dashArr.dashid,
    //       dashname: dashArr.dashname,
    //       web: JSON.stringify(dashArr.web),
    //       mobile: JSON.stringify(dashArr.mobile),
    //       tablet: JSON.stringify(dashArr.tablet)
    //     }
    //   )
    //   .then((result) => { 

    //     console.log(result);
        
    //   })
    //   .catch(error => {
    //     alert(error);
    //     throw new Error(error);
    //   }
    // );


   },);
  
  const settingOpen = (e) => {
    
    if(e.target.innerText === "대시보드 추가") {
      setDashModalType(e.target.innerText);
      handleDashModalOpen();
    } else if(e.target.innerText === "대시보드 삭제") {
      setDashModalType(e.target.innerText);
      handleDashModalOpen();
    }

    // if(e.target.innerText === "위젯 추가") {
    //   handleWidgetModalOpen();
    // } else if(e.target.innerText === "대시보드 추가") {
    //   setDashModalType(e.target.innerText);
    //   handleDashModalOpen();
    // } else if(e.target.innerText === "대시보드 수정") {
    //   setDashModalType(e.target.innerText);
    //   handleDashModalOpen();
    // } else if(e.target.innerText === "대시보드 삭제") {
    //   handleDashDeleteModalOpen();
    // }
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Button className={classes.button} variant="contained" color="primary" onClick={(e) => settingOpen(e)}>대시보드 추가</Button>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <CustomSelectBox setDashId={setDashId}/>
          {/* <CustomSelectBox dashId={dashId}/> */}
        </GridItem>
      </GridContainer>

      <Card className={classes.root}>
        <CardHeader
          action={
            <div>
              <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
              <MoreVertIcon style={{color: "#fff"}}/>
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={openSetting}
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
          }
          title={reducer.dashboard[dashId].dashname}
        />
        <CardContent> 
          <GridStackControllerEdit dashId ={dashId}/>
        </CardContent>
      </Card>

      <DashModal
        dashId={dashId} 
        setDashId={setDashId}
        dashModalType={dashModalType}
        open={openDashAddModal}
        close={handleDashAddModalClose}
      />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    reducer: state
  }
}

export default connect(
  mapStateToProps
)(DashboardEdit)
