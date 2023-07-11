import { useCallback } from "react";
import "./Login2OTP1.css";
const Login2OTP1 = () => {
  const onIcocloseIconClick = useCallback(() => {
    // Please sync "04-Login - 4" to the project
  }, []);

  const onBtAgreeContainerClick = useCallback(() => {
    // Please sync "04-Login - 2OTP - 2" to the project
  }, []);

  return (
    <div className="login-2otp-1">
      <div className="bg" />
      <img className="combined-shape-icon" alt="" src="/combined-shape.svg" />
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
      <img
        className="icoclose-icon"
        alt=""
        src="/icoclose.svg"
        onClick={onIcocloseIconClick}
      />
      <div className="dialog">
        <div className="rectangle1" />
        <div className="lock">
          <img className="shape-icon" alt="" src="/shape.svg" />
          <img className="shape-icon1" alt="" src="/shape1.svg" />
          <img className="shape-icon2" alt="" src="/shape2.svg" />
          <img className="path-icon" alt="" src="/path.svg" />
          <img className="path-icon1" alt="" src="/path1.svg" />
          <img className="path-icon2" alt="" src="/path2.svg" />
          <div className="icoverify" />
        </div>
        <div className="bt-agree" onClick={onBtAgreeContainerClick}>
          <img className="shadows-icon" alt="" src="/shadows.svg" />
          <div className="button" />
          <div className="otp">ขอรหัส OTP</div>
        </div>
        <b className="otp1">OTP จะถูกส่งไปที่เบอร์โทรศัพท์</b>
        <div className="xxx-8998">082-XXX-8998</div>
        <div className="div">
          กรณีเบอร์โทรศัพท์ไม่ถูกต้องกรุณาติดต่อเบอร์ 02-XXX-XXXX
        </div>
      </div>
    </div>
  );
};

export default Login2OTP1;
