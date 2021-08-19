/*eslint-disable*/
import React, { useState, useEffect, createRef, useRef } from 'react';

// gridstack
import {GridStack} from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';
//import 'gridstack/dist/jq/gridstack-dd-jqueryui.js';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';

// material
import { Grid, Button } from '@material-ui/core';

// widget
import TestWidget from 'widgets/TestWidget.js'
import DemoWidget from 'widgets/DemoWidget.js'
import Demo2Widget from 'widgets/Demo2Widget.js'
import Demo3Widget from 'widgets/Demo3Widget.js'
import Demo4Widget from 'widgets/Demo4Widget.js'
import Demo5Widget from 'widgets/Demo5Widget.js'
import Demo6Widget from 'widgets/Demo6Widget.js'
//import StockChartWidget from 'widgets/StockChartWidget.js'
import Test from 'widgets/Test.js'

// material
import { makeStyles } from '@material-ui/core/styles';

// // redux
import { connect } from 'react-redux';

// Axios
import axios from 'axios';

const useStyles = makeStyles(() => ({
  button: {
    width: "100%",
    backgroundColor: '#00acc1',
    '&:hover': {
      backgroundColor: '#00CBE6',
    }
  },
}));

function GridStackControllerEdit (props) {
  
  const classes = useStyles();

  // 브라우저 크기
  const windowSize = window.innerWidth;
 
  const refs = useRef({})
  const gridRef = useRef()

  if(windowSize > 1024) {
    if (Object.keys(refs.current).length !== props.dashboard[props.dashId].web.length) {
      props.dashboard[props.dashId].web.forEach(({ id }) => {
        refs.current[id] = refs.current[id] || createRef()
      })
    }
   
  } else if(windowSize <= 1224 && windowSize > 500)  {
    if (Object.keys(refs.current).length !== props.dashboard[props.dashId].tablet.length) {
      props.dashboard[props.dashId].tablet.forEach(({ id }) => {
        refs.current[id] = refs.current[id] || createRef()
      })
    }
  } else if(windowSize <= 500) {
    if (Object.keys(refs.current).length !== props.dashboard[props.dashId].mobile.length) {
      props.dashboard[props.dashId].mobile.forEach(({ id }) => {
        refs.current[id] = refs.current[id] || createRef()
      })
    }
  }

  useEffect(() => {
    gridRef.current =
      gridRef.current ||
      GridStack.init(
        {
          float: true,
          //alwaysShowResizeHandle: true,
          cellHeight: "8em",
          resizable: { handles: 'e, se, s, sw, w' },
          margin: 7
        },
        '.controlled'
      )
    const grid = gridRef.current
    
    grid.batchUpdate()
    grid.removeAll()
    
    if(windowSize > 1024) props.dashboard[props.dashId].web.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
    else if(windowSize <= 1224 && windowSize > 500) props.dashboard[props.dashId].tablet.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
    else if(windowSize <= 500) props.dashboard[props.dashId].mobile.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
  
    grid.commit()
  
  }, )

  const makeWidget = (widgetItem) => {
    if(widgetItem.type === "type1") return <TestWidget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type2") return <DemoWidget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type3") return <Demo2Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type4") return <Demo3Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    //else if(widgetItem.type === "type5") return <StockChartWidget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type6") return <Demo4Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type7") return <Demo5Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type8") return <Demo6Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    else if(widgetItem.type === "type9") return <Test widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    // else if(widgetItem.type === "type8") return <T10Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    // else if(widgetItem.type === "type9") return <Demo2Widget widgetInfo={widgetItem} dashId={0} setting={"on"} />
    // else if(widgetItem.type === "type10") return <TestWidgetA widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
  };
  
  const saveGrid = () => {
    const grid = gridRef.current
    let mobileHeight = 0;
    let mobileHeightArray = [];

    let tabletArray = [0,0];
    let tabletLeftHeight = 0;
    let tabletRightHeight = 0;

    let webArr = [];
    let tabletArr = [];
    let mobileArr = [];

    grid.engine.nodes.map ( (n,j) => {
      
      const node = {
        id: n.id,
        x: n.x,
        y: n.y,
        w: n.w,
        h: n.h,
        type: n.el.attributes[1].value,
        name: n.el.attributes[5].value,
        font: Number(n.el.attributes[6].value)
      }

      if(j%2 === 0) {
        tabletArray.concat(n.h);
      } else if(j%2 === 1) {
        tabletArray.concat(n.h);
      }

      j%2 === 0 ? tabletLeftHeight += tabletArray[j] : tabletRightHeight += tabletArray[j];

      const nodeTablet = {
        id: n.id,
        x: j%2 === 0 ? 0 : 6,
        y: j%2 === 0 ? tabletLeftHeight : tabletRightHeight,
        w: 6,
        h: n.h,
        type: n.el.attributes[1].value,
        name: n.el.attributes[5].value,
        font: Number(n.el.attributes[6].value)
      }

      if(j===0) {
        mobileHeightArray.concat(j);
        mobileHeightArray.concat(n.h);  
      } else {
        mobileHeightArray.concat(n.h);
      }
      
      mobileHeight += mobileHeightArray[j];

      const nodeMobile = {
        id: n.id,
        x: 0,
        y: mobileHeight,
        w: 1,
        h: n.h,
        type: n.el.attributes[1].value,
        name: n.el.attributes[5].value,
        font: Number(n.el.attributes[6].value)
      }

      webArr = webArr.concat(node);
      tabletArr = tabletArr.concat(nodeTablet);
      mobileArr = mobileArr.concat(nodeMobile);
    
    })

    if(window.confirm('저장 하시겠습니까?') == false) return;
      
    // const dashArr = ({
    //   id: props.dashboard[props.dashId].id,
    //   dashname: props.dashboard[props.dashId].dashname,
    //   web: webArr,
    //   tablet: tabletArr,
    //   mobile: mobileArr
    // })

    // props.dispatch({
    //   type: "save", 
    //   dashboard: dashArr,
    //   dashId: props.dashId
    // })
    
    const dashArr = ({
      dashid: props.dashboard[props.dashId].id,
      dashname: props.dashboard[props.dashId].dashname,
      web: webArr,
      tablet: tabletArr,
      mobile: mobileArr
    })

    props.dispatch({
      type: "save", 
      dashboard: dashArr,
      dashId: props.dashId
    })

    console.log(dashArr);
     
    axios.post('http://localhost:8080/Dashboard/add', 
        { 
          dashid: props.dashboard[props.dashId].id,
          dashname: props.dashboard[props.dashId].dashname
        }
      )
      .then((result) => { 

        console.log(result);
        
      })
      .catch(error => {
        alert(error);
        throw new Error(error);
      }
    );




  };






  return (
    <div>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Button className={classes.button} variant="contained" color="primary" onClick={saveGrid} style={{width: "100%", marginTop: "10px", marginBottom: "10px"}}>위젯 저장</Button>
        </Grid>
      </Grid>
      
      <div className={`grid-stack controlled`} >

      { 
        (windowSize > 1024) 
        && props.dashboard[props.dashId].web.map((item, i) => {
          return (
            <div 
              className={'grid-stack-item'}  
              ref={refs.current[item.id]} 
              key={item.id} 
              type={item.type}
              gs-id={item.id} 
              gs-w={item.w} 
              gs-h={item.h} 
              name={item.name}
              font={item.font}
              gs-x={item.x} 
              gs-y={item.y} 
              gs-min-w={2}
              gs-min-h={2}
            >
              <div className="grid-stack-item-content">
              {
                makeWidget(item)
              }
              </div>
            </div>
          )
        })
      }

      { 
        (windowSize <= 1224 && windowSize > 500) 
        && props.dashboard[props.dashId].tablet.map((item, i) => {
          return (
            <div 
              className={'grid-stack-item'}  
              ref={refs.current[item.id]} 
              key={item.id} 
              type={item.type}
              gs-id={item.id} 
              gs-w={item.w} 
              gs-h={item.h} 
              name={item.name}
              font={item.font}
              gs-x={item.x} 
              gs-y={item.y} 
              gs-min-w={2}
              gs-min-h={2}
            >
              <div className="grid-stack-item-content">
              {
                makeWidget(item)
              }
              </div>
            </div>
          )
        })
      }

      { 
        (windowSize <= 500) 
        && props.dashboard[props.dashId].mobile.map((item, i) => {
          return (
            <div 
              className={'grid-stack-item'}  
              ref={refs.current[item.id]} 
              key={item.id} 
              type={item.type}
              gs-id={item.id} 
              gs-w={item.w} 
              gs-h={item.h} 
              name={item.name}
              font={item.font}
              gs-x={item.x} 
              gs-y={item.y}
              gs-min-w={2}
              gs-min-h={2}
            >
              <div className="grid-stack-item-content">
              {
                makeWidget(item)
              }
              </div>
            </div>
          )
        })
      }

      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    dashboard: state
  }
}

export default connect(
  mapStateToProps
)(GridStackControllerEdit)