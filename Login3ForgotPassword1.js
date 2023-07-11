import { useCallback } from "react";
import "./Login3ForgotPassword1.css";
const Login3ForgotPassword1 = () => {
  const onLogin3ForgotPassword1Click = useCallback(() => {
    // Please sync "04-Login - 3Forgot password - 2" to the project
  }, []);

  return (
    <div
      className="login-3forgot-password-1"
      onClick={onLogin3ForgotPassword1Click}
    >
      <div className="bg" />
      <div className="bt-agree">
        <img className="shadows-icon" alt="" src="/shadows.svg" />
        <div className="button" />
        <div className="otp">ส่ง</div>
      </div>
      <div className="filed-username">
        <div className="line">
          <div className="line-child" />
        </div>
        <div className="cgs119288">อีเมล / เบอร์โทรศัพท์</div>
        <img className="checked-icon" alt="" src="/checked.svg" />
        <div className="rectangle" />
        <div className="username">ชื่อผู้ใช้งาน</div>
      </div>
      <div className="title">
        <div className="div">กรุณากรอกอีเมลหรือเบอร์โทรศัพท์ที่ลงทะเบียน</div>
        <b className="b">ลืมรหัสผ่าน?</b>
      </div>
      <div className="iphone-xstatus-barsstatus-ba">
        <div className="iphone-xstatus-barsstatus-ba1">
          <div className="rectangle1" />
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
      <img className="icoclose-icon" alt="" src="/icoclose.svg" />
    </div>
  );
};

export default Login3ForgotPassword1;
