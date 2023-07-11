import { useCallback } from "react";
import "./SplashScreen.css";
const SplashScreen = () => {
  const onSplashScreenContainerClick = useCallback(() => {
    // Please sync "02-Select language" to the project
  }, []);

  return (
    <div className="splash-screen" onClick={onSplashScreenContainerClick}>
      <div className="bg" />
      <div className="iphone-xstatus-barsstatus-ba">
        <div className="iphone-xstatus-barsstatus-ba1">
          <div className="rectangle" />
          <div className="battery">
            <div className="border" />
            <img className="cap-icon" alt="" src="/cap.svg" />
            <div className="capacity" />
          </div>
          <img className="wifi-icon" alt="" src="/wifi.svg" />
          <img
            className="cellular-connection-icon"
            alt=""
            src="/cellular-connection.svg"
          />
          <div className="time-style">
            <div className="time">
              <span className="span">9:4</span>1
            </div>
          </div>
        </div>
      </div>
      <div className="barshome-indicatoriphonelig">
        <div className="home-indicator" />
      </div>
    </div>
  );
};

export default SplashScreen;