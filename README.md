# iWidget


## Material Dashboard React
Material Ui DEMO Templete 사용
Material UI Customizing

## iWidget 파일구조

```
iWidget
.
├── iWidgetBack  
│   ├── src  
│   │   ├── main  
│   │   │   │   ├── java\com\project\iwidget  
│   │   │   │   │   ├── Auth  
│   │   │   │   │   │   ├── AuthController.java  
│   │   │   │   │   │   ├── AuthMapper.java  
│   │   │   │   │   │   ├── AuthService.java  
│   │   │   │   │   │   ├── AuthVO.java
│   │   │   │   │   ├── Config  
│   │   │   │   │   │   ├── MongoCinfig.java  
│   │   │   │   │   │   ├── MyBatisConfig.java  
│   │   │   │   │   │   ├── WebConfig.java  
│   │   │   │   │   ├── Response  
│   │   │   │   │   │   ├── ResponseObject.java  
│   │   │   │   │   │   ├── StatusCode.java  
│   │   │   │   │   ├── Utils  
│   │   │   │   │   │   ├── encryptUtil.java  
│   │   │   │   │   │   ├── MongoUtil.java  
│   │   │   │   │   ├── IwidgetApplication.java  
│   │   │   │   ├── resources  
│   │   │   │   │   ├── mybatis\mappers\auth  
│   │   │   │   │   │   ├── AuthMapper.xml  
│   │   │   │   │   ├── application.yml  
├── iWidgetFront  
│   ├── documentation  
│   │   ├── assets  
│   │   │   ├── css  
│   │   │   ├── img  
│   │   │   │   └── faces  
│   │   │   └── js  
│   │   └── tutorial-components.html  
│   ├── public  
│   │   ├── favicon.ico  
│   │   ├── index.html  
│   │   └── manifest.json  
│   └── src  
│   │   ├── api  
│   │   │   │   ├── apiAxios.js  
│   │   │   │   ├── dbAxios.js  
│   │   │   │   ├── Items.js  
│   │   ├── assets  
│   │   │   ├── css  
│   │   │   │   └── material-dashboard-react.css  
│   │   │   │   ├── github  
│   │   │   │   ├── md-react.gif  
│   │   │   │   └── react.svg  
│   │   │   ├── img  
│   │   │   │   └── faces  
│   │   │   └── jss  
│   │   │       ├── material-dashboard-react  
│   │   │       │   ├── components  
│   │   │       │   ├── layouts  
│   │   │       │   └── views  
│   │   │       └── material-dashboard-react.js  
│   │   ├── components  
│   │   │   ├── Card  
│   │   │   │   ├── Card.js  
│   │   │   │   ├── CardAvatar.js  
│   │   │   │   ├── CardBody.js  
│   │   │   │   ├── CardFooter.js  
│   │   │   │   ├── CardHeader.js  
│   │   │   │   └── CardIcon.js  
│   │   │   ├── CustomButtons  
│   │   │   │   └── Button.js  
│   │   │   ├── CustomInput  
│   │   │   │   └── CustomInput.js  
│   │   │   ├── CustomTabs  
│   │   │   │   └── CustomTabs.js  
│   │   │   ├── FixedPlugin  
│   │   │   │   └── FixedPlugin.js  
│   │   │   ├── Footer  
│   │   │   │   └── Footer.js  
│   │   │   ├── Grid  
│   │   │   │   ├── GridContainer.js  
│   │   │   │   └── GridItem.js  
│   │   │   ├── Navbars  
│   │   │   │   ├── AdminNavbarLinks.js  
│   │   │   │   │   ├── Navbar.js  
│   │   │   │   └── RTLNavbarLinks.js  
│   │   │   ├── Sidebar  
│   │   │   │   └── Sidebar.js  
│   │   │   ├── Snackbar  
│   │   │   │   ├── Snackbar.js  
│   │   │   │   └── SnackbarContent.js  
│   │   │   ├── Table  
│   │   │   │   └── Table.js  
│   │   │   ├── Tasks  
│   │   │   │   └── Tasks.js  
│   │   │   └── Typography  
│   │   │       ├── Danger.js  
│   │   │       ├── Info.js  
│   │   │       ├── Muted.js  
│   │   │       ├── Primary.js  
│   │   │       ├── Quote.js  
│   │   │       ├── Success.js  
│   │   │       └── Warning.js  
│   │   ├── gridstack  
│   │   │   ├── GridStackControllerEdit.js  
│   │   │   ├── GridStackControllerMonitor.js  
│   │   ├── hooks  
│   │   │   ├── index.js  
│   │   │   ├── useRouteName.js  
│   │   ├── images  
│   │   ├── layouts  
│   │   │   ├── Admin.js  
│   │   └── views  
│   │   │   ├── Auth  
│   │   │   │   └── Siginin.js  
│   │   │   │   └── Siginup.js  
│   │   │   ├── Dashboard  
│   │   │   │   └── Dashboard.js  
│   │   │   │   └── DashboardEdit.js  
│   │   │   ├── Notifications  
│   │   │   │   └── Notifications.js  
│   │   │   ├── TableList  
│   │   │   │   └── TableList.js  
│   │   │   ├── Typography  
│   │   │   │   └── Typography.js  
│   │   │   ├── UpgradeToPro  
│   │   │   │   └── UpgradeToPro.js  
│   │   │   └── UserProfile  
│   │   │       └── UserProfile.js  
│   │   └── widgets  
│   │   │   ├── Demo2Widget.js  
│   │   │   ├── Demo3Widget.js  
│   │   │   ├── Demo4Widget.js  
│   │   │   ├── Demo5Widget.js  
│   │   │   ├── Demo6Widget.js  
│   │   │   ├── DemoWidget.js  
│   │   │   ├── StockChartWidget.js  
│   │   │   ├── Test.js  
│   │   │   ├── TestWidget.js  
│   │   ├── App.css  
│   │   ├── App.js  
│   │   ├── index.js  
│   │   ├── reportWebVitals.js  
│   │   ├── routes.js  
│   │   ├── setupTests.js  
│── README.md  
```