import { useCallback } from "react";
import "./Login4.css";
const Login4 = () => {
  const onText2Click = useCallback(() => {
    // Please sync "04-Login - 3Forgot password - 1" to the project
  }, []);

  const onBtAgreeContainerClick = useCallback(() => {
    // Please sync "04-Login - 2OTP - 1" to the project
  }, []);

  return (
    <div className="login-4">
      <div className="bg" />
      <div className="field-password">
        <div className="line-copy">
          <div className="line-copy-child" />
          <div className="rectangle-9-copy" />
          <div className="rectangle-9-copy1" />
        </div>
        <div className="div">รหัสผ่าน</div>
        <div className="password">รหัสผ่าน</div>
      </div>
      <div className="div1">บันทึกการเข้าสู่ระบบ</div>
      <div className="div2" onClick={onText2Click}>
        ลืมรหัสผ่าน?
      </div>
      <div className="line-copy1">
        <div className="line-copy-child" />
        <div className="rectangle-9-copy" />
        <div className="rectangle-9-copy1" />
      </div>
      <div className="line-copy2">
        <div className="line-copy-child" />
        <div className="rectangle-9-copy" />
        <div className="rectangle-9-copy1" />
      </div>
      <div className="filed-username">
        <div className="line">
          <div className="rectangle-9-copy" />
        </div>
        <div className="cgs119288">ชื่อผู้ใช้งาน</div>
        <img className="checked-icon" alt="" src="/checked.svg" />
        <div className="rectangle" />
        <div className="username">ชื่อผู้ใช้งาน</div>
      </div>
      <div className="password1">ไม่มีบัญชีผู้ใช้</div>
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
      <div className="login-4-child" />
      <div className="bt-agree" onClick={onBtAgreeContainerClick}>
        <img className="shadows-icon" alt="" src="/shadows.svg" />
        <div className="button" />
        <div className="otp">เข้าสู่ระบบ</div>
      </div>
      <div className="line-copy3">
        <div className="line-copy-child" />
        <div className="rectangle-9-copy" />
        <div className="rectangle-9-copy1" />
      </div>
      <div className="bt-agree1">
        <img className="shadows-icon" alt="" src="/shadows1.svg" />
        <div className="button1" />
        <div className="otp1">เปิดบัญชีเพื่อลงทะเบียนบัญชีผู้ใช้</div>
      </div>
      <div className="div3">
        <span>{`ไม่มีบัญชี? `}</span>
        <span className="span1">ลงทะเบียน</span>
      </div>
    </div>
  );
};

export default Login4;
