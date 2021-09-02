/*eslint-disable*/
import React, { useState, useEffect, createRef, useRef } from 'react';

// gridstack
import {GridStack} from 'gridstack';
import 'gridstack/dist/h5/gridstack-dd-native';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.min.css';

// material
import { makeStyles } from '@material-ui/core/styles';

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


// // redux
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
 
  button: {
    width: "100%",
    backgroundColor: '#398BF7',
    '&:hover': {
      backgroundColor: '#0546C8',
    }
  },
  
}));

function GridStackControllerMonitor({reducer,dashId}) {
  
  const classes = useStyles();

  // 브라우저 크기
  const windowSize = window.innerWidth;
 
  const refs = useRef({})
  const gridRef = useRef()

  if(windowSize > 1024) {
    if (Object.keys(refs.current).length !== reducer.dashboard[dashId].web.length) {
      reducer.dashboard[dashId].web.forEach(({ id }) => {
        refs.current[id] = refs.current[id] || createRef()
      })
    }
   
  } else if(windowSize <= 1224 && windowSize > 500)  {
    if (Object.keys(refs.current).length !== reducer.dashboard[dashId].tablet.length) {
      reducer.dashboard[dashId].tablet.forEach(({ id }) => {
        refs.current[id] = refs.current[id] || createRef()
      })
    }
  } else if(windowSize <= 500) {
    if (Object.keys(refs.current).length !== reducer.dashboard[dashId].mobile.length) {
      reducer.dashboard[dashId].mobile.forEach(({ id }) => {
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
            cellHeight: "8em",
            disableDrag: true,
            disableResize: true
        },
        '.controlled'
      )
    const grid = gridRef.current
    
    grid.batchUpdate()
    grid.removeAll()
    
    if(windowSize > 1024) reducer.dashboard[dashId].web.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
    else if(windowSize <= 1224 && windowSize > 500) reducer.dashboard[dashId].tablet.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
    else if(windowSize <= 500) reducer.dashboard[dashId].mobile.forEach(({ id }) => grid.makeWidget(refs.current[id].current))
  
    grid.commit()
  
  }, )

  const makeWidget = (widgetItem) => {
    if(widgetItem.type === "type1") return <TestWidget widgetInfo={widgetItem} dashId={dashId} />
    else if(widgetItem.type === "type2") return <DemoWidget widgetInfo={widgetItem} dashId={dashId} />
    else if(widgetItem.type === "type3") return <Demo2Widget widgetInfo={widgetItem} dashId={dashId} />
    else if(widgetItem.type === "type4") return <Demo3Widget widgetInfo={widgetItem} dashId={dashId} />
    //else if(widgetItem.type === "type5") return <StockChartWidget widgetInfo={widgetItem} dashId={props.dashId} />
    else if(widgetItem.type === "type6") return <Demo4Widget widgetInfo={widgetItem} dashId={dashId} />
    else if(widgetItem.type === "type7") return <Demo5Widget widgetInfo={widgetItem} dashId={dashId} />
    else if(widgetItem.type === "type8") return <Demo6Widget widgetInfo={widgetItem} dashId={dashId} />
    else if(widgetItem.type === "type9") return <Test widgetInfo={widgetItem} dashId={dashId} />
    // else if(widgetItem.type === "type8") return <T10Widget widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
    // else if(widgetItem.type === "type9") return <Demo2Widget widgetInfo={widgetItem} dashId={0} setting={"on"} />
    // else if(widgetItem.type === "type10") return <TestWidgetA widgetInfo={widgetItem} dashId={props.dashId} setting={"on"} />
  };
  
  return (
    <div className={`grid-stack controlled`} >
      { 
        (windowSize > 1024) 
        && reducer.dashboard[dashId].web.map((item, i) => {
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
        && reducer.dashboard[dashId].tablet.map((item, i) => {
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
        && reducer.dashboard[dashId].mobile.map((item, i) => {
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
  )
}

const mapStateToProps = (state) => {
  return {
    reducer: state
  }
}

export default connect(
  mapStateToProps
)(GridStackControllerMonitor)
