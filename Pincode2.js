import { useCallback } from "react";
import "./Pincode2.css";
const Pincode2 = () => {
  const onContainer4Click = useCallback(() => {
    // Please sync "06-Touch ID - 1" to the project
  }, []);

  return (
    <div className="pincode-2">
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
      <img className="field-icon" alt="" src="/field.svg" />
      <div className="pin-code">ยืนยันรหัส PIN CODE</div>
      <div className="numpad">
        <div className="div">
          <div className="base" />
          <div className="div1">1</div>
        </div>
        <div className="div2">
          <div className="base" />
          <div className="div1">2</div>
        </div>
        <div className="div4">
          <div className="base" />
          <div className="div1">3</div>
        </div>
        <div className="div6">
          <div className="base" />
          <div className="div1">4</div>
        </div>
        <div className="div8" onClick={onContainer4Click}>
          <div className="base4" />
          <div className="div9">5</div>
        </div>
        <div className="div10">
          <div className="base" />
          <div className="div1">6</div>
        </div>
        <div className="div12">
          <div className="base" />
          <div className="div13">7</div>
        </div>
        <div className="div14">
          <div className="base" />
          <div className="div15">8</div>
        </div>
        <div className="div16">
          <div className="base" />
          <div className="div17">9</div>
        </div>
        <div className="div18">
          <div className="base" />
          <div className="div1">0</div>
        </div>
        <img className="face-id-icon" alt="" src="/face-id.svg" />
        <img className="delete-icon" alt="" src="/delete.svg" />
      </div>
    </div>
  );
};

export default Pincode2;
