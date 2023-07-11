import { useCallback } from "react";
import "./SelectLanguage.css";
const SelectLanguage = () => {
  const onBtEnCopyContainerClick = useCallback(() => {
    // Please sync "03-Disclaimer" to the project
  }, []);

  return (
    <div className="select-language">
      <div className="bg" />
      <b className="welcome">ยินดีต้อนรับ</b>
      <div className="div">กรุณาเลือกภาษา</div>
      <div className="bt-en">
        <div className="rectangle" />
        <div className="english">English</div>
      </div>
      <div className="bt-en-copy" onClick={onBtEnCopyContainerClick}>
        <div className="rectangle" />
        <div className="div1">ไทย</div>
      </div>
      <div className="iphone-xstatus-barsstatus-ba">
        <div className="iphone-xstatus-barsstatus-ba1">
          <div className="rectangle2" />
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

export default SelectLanguage;
