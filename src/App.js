import React, {Fragment} from "react";
import AsidePanel from "./asidePanel";
import MainView from "./mainView";
import './main.scss';

const App =()=>{
  return(
    <Fragment>
      <AsidePanel />
      <MainView />
    </Fragment>
  )
  
}

export default App