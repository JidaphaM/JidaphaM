import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Login2OTP2.css";
const Login2OTP2 = () => {
  const navigate = useNavigate();

  const onLogin2OTP2Click = useCallback(() => {
    // Please sync "05-Pincode - 1" to the project
  }, []);

  const onBtAgreeContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSystemKeyboardsiPhoneDarkNContainerClick = useCallback(() => {
    // Please sync "05-Pincode - 1" to the project
  }, []);

  const onIcocloseIconClick = useCallback(() => {
    // Please sync "04-Login - 2OTP - 1" to the project
  }, []);

  return (
    <div className="login-2otp-2" onClick={onLogin2OTP2Click}>
      <div className="bg" />
      <div className="div">ส่งรหัสใหม่ (57)</div>
      <div className="div1">หากคุณไม่ได้รับรหัส?</div>
      <div className="bt-agree" onClick={onBtAgreeContainerClick}>
        <img className="shadows-icon" alt="" src="/shadows.svg" />
        <div className="button" />
        <div className="otp">ยืนยัน</div>
      </div>
      <div className="field-otp">
        <div className="field">
          <div className="rectangle" />
          <div className="div2">8</div>
        </div>
        <div className="field1">
          <div className="rectangle" />
          <div className="div2">7</div>
        </div>
        <div className="field2">
          <div className="rectangle" />
          <div className="div2">3</div>
        </div>
        <div className="field3">
          <div className="rectangle3" />
          <div className="div5">5</div>
        </div>
        <div className="input-field">
          <img className="shadows-icon1" alt="" src="/shadows1.svg" />
          <div className="rectangle-copy-4" />
          <div className="rectangle4" />
        </div>
        <div className="field4" />
      </div>
      <div className="field-otp1">
        <div className="filed-otp">
          <div className="line">
            <div className="line-child" />
          </div>
          <div className="cgs119288">1</div>
        </div>
        <div className="filed-otp1">
          <div className="line">
            <div className="line-child" />
          </div>
          <div className="cgs119288">8</div>
        </div>
        <div className="filed-otp2">
          <div className="line">
            <div className="line-child" />
          </div>
          <div className="cgs119288">9</div>
        </div>
        <div className="filed-otp3">
          <div className="line">
            <div className="line-child" />
          </div>
          <div className="cgs1192883">|</div>
        </div>
        <div className="filed-otp4">
          <div className="line">
            <div className="line-child" />
          </div>
          <div className="cgs1192883">1</div>
        </div>
        <div className="filed-otp5">
          <div className="line">
            <div className="line-child" />
          </div>
          <div className="cgs1192883">1</div>
        </div>
      </div>
      <div className="title">
        <div className="xxx-8998">082-XXX-8998</div>
        <div className="div6">{`กรุณากรอกรหัสยืนยันที่เราได้ส่งให้คุณ `}</div>
        <b className="b">ยืนยันตัวตน</b>
      </div>
      <div
        className="systemkeyboardsiphonedarkn"
        onClick={onSystemKeyboardsiPhoneDarkNContainerClick}
      >
        <div className="background">
          <div className="background1" />
        </div>
        <div className="home-indicator">
          <div className="home-indicator1" />
        </div>
        <div className="keys">
          <img className="delete-icon" alt="" src="/delete.svg" />
          <div className="div7">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background.svg"
            />
            <div className="number">0</div>
          </div>
          <div className="div8">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background1.svg"
            />
            <b className="label">WXYZ</b>
            <div className="number1">9</div>
          </div>
          <div className="div9">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background2.svg"
            />
            <b className="label">TUV</b>
            <div className="number1">8</div>
          </div>
          <div className="div10">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background3.svg"
            />
            <b className="label">PQRS</b>
            <div className="number1">7</div>
          </div>
          <div className="div11">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background4.svg"
            />
            <b className="label">MNO</b>
            <div className="number1">6</div>
          </div>
          <div className="div12">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background5.svg"
            />
            <b className="label">JKL</b>
            <div className="number1">5</div>
          </div>
          <div className="div13">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background6.svg"
            />
            <b className="label">GHI</b>
            <div className="number1">4</div>
          </div>
          <div className="div14">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background7.svg"
            />
            <b className="label">DEF</b>
            <div className="number1">3</div>
          </div>
          <div className="div15">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background8.svg"
            />
            <b className="label">ABC</b>
            <div className="number1">2</div>
          </div>
          <div className="div16">
            <img
              className="key-background-icon"
              alt=""
              src="/key-background9.svg"
            />
            <b className="label">{` `}</b>
            <div className="number1">1</div>
          </div>
        </div>
      </div>
      <div className="systemkeyboardsiphonedarkn1">
        <div className="background">
          <div className="background3" />
        </div>
        <div className="home-indicator">
          <div className="home-indicator3" />
        </div>
        <div className="keys1">
          <img className="delete-icon" alt="" src="/delete1.svg" />
          <div className="div7">
            <img
              className="key-background-icon10"
              alt=""
              src="/key-background10.svg"
            />
            <div className="number">0</div>
          </div>
          <div className="div8">
            <img
              className="key-background-icon11"
              alt=""
              src="/key-background11.svg"
            />
            <b className="label">WXYZ</b>
            <div className="number1">9</div>
          </div>
          <div className="div9">
            <img
              className="key-background-icon11"
              alt=""
              src="/key-background12.svg"
            />
            <b className="label">TUV</b>
            <div className="number1">8</div>
          </div>
          <div className="div10">
            <img
              className="key-background-icon11"
              alt=""
              src="/key-background13.svg"
            />
            <b className="label">PQRS</b>
            <div className="number1">7</div>
          </div>
          <div className="div11">
            <img
              className="key-background-icon11"
              alt=""
              src="/key-background14.svg"
            />
            <b className="label">MNO</b>
            <div className="number1">6</div>
          </div>
          <div className="div12">
            <img
              className="key-background-icon11"
              alt=""
              src="/key-background15.svg"
            />
            <b className="label">JKL</b>
            <div className="number1">5</div>
          </div>
          <div className="div13">
            <img
              className="key-background-icon11"
              alt=""
              src="/key-background16.svg"
            />
            <b className="label">GHI</b>
            <div className="number1">4</div>
          </div>
          <div className="div14">
            <img
              className="key-background-icon10"
              alt=""
              src="/key-background17.svg"
            />
            <b className="label">DEF</b>
            <div className="number1">3</div>
          </div>
          <div className="div15">
            <img
              className="key-background-icon10"
              alt=""
              src="/key-background18.svg"
            />
            <b className="label">ABC</b>
            <div className="number1">2</div>
          </div>
          <div className="div16">
            <img
              className="key-background-icon10"
              alt=""
              src="/key-background19.svg"
            />
            <b className="label">{` `}</b>
            <div className="number1">1</div>
          </div>
        </div>
      </div>
      <div className="iphone-xstatus-barsstatus-ba">
        <div className="iphone-xstatus-barsstatus-ba1">
          <div className="background" />
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
        <div className="home-indicator4" />
      </div>
      <img
        className="icoclose-icon"
        alt=""
        src="/icoclose.svg"
        onClick={onIcocloseIconClick}
      />
    </div>
  );
};

export default Login2OTP2;
