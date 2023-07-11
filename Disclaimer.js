import { useCallback } from "react";
import "./Disclaimer.css";
const Disclaimer = () => {
  const onBtAgreeContainerClick = useCallback(() => {
    // Please sync "04-Login - 4" to the project
  }, []);

  return (
    <div className="disclaimer">
      <div className="bg" />
      <div className="bg1" />
      <img className="icoback-icon" alt="" src="/icoback.svg" />
      <b className="b">เงื่อนไขการใช้บริการ</b>
      <div className="ico">
        <img className="shape-icon" alt="" src="/shape.svg" />
        <img className="shape-icon1" alt="" src="/shape1.svg" />
        <img className="shape-copy-3" alt="" src="/shape-copy-3.svg" />
        <img className="shape-copy-icon" alt="" src="/shape-copy.svg" />
        <img className="shape-copy-2" alt="" src="/shape-copy-2.svg" />
        <img className="shape-icon2" alt="" src="/shape2.svg" />
        <div className="icoterm" />
      </div>
      <div className="rectangle" />
      <div className="rectangle1" />
      <div className="bt-agree" onClick={onBtAgreeContainerClick}>
        <img className="shadows-icon" alt="" src="/shadows.svg" />
        <div className="rectangle2" />
        <div className="div">ยอมรับ</div>
      </div>
      <div className="bt-cancel">
        <div className="rectangle3" />
        <div className="div1">ปฏิเสธ</div>
      </div>
      <div className="iphone-xstatus-barsstatus-ba">
        <div className="iphone-xstatus-barsstatus-ba1">
          <div className="rectangle4" />
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
      <img className="line-icon" alt="" src="/line.svg" />
      <img className="cgs-logo-icon" alt="" src="/cgslogo.svg" />
    </div>
  );
};

export default Disclaimer;
