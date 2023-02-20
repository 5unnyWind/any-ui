import React, { useState } from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface Drawerprops
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: string; //传入的标题
  children?: React.ReactNode;
  position?: string;
  open?: any;
  closeBtn?: any;
  onCancel?: any;
}
const Drawer = React.forwardRef(
  (props: Drawerprops, ref: React.Ref<HTMLDivElement>) => {
    console.log(props);
    var { title, children, position, open, closeBtn, onCancel, ...others } =
      props;

    const shade: any = document.getElementById("shade");
    const noti: any = document.getElementById("notification");

    var style = classNames("ai-modal-notiBox-right");
    if (position == "Right") {
      style = classNames("ai-modal-notiBox-right");
    } else if (position == "Top") {
      style = classNames("ai-modal-notiBox-top");
    } else if (position == "Bottom") {
      style = classNames("ai-modal-notiBox-bottom");
    } else if (position == "Left") {
      style = classNames("ai-modal-notiBox-left");
    }
    console.log(style);

    const close: any = () => {
      shade.className = "ai-modal-none";
      noti.className = "ai-modal-none";
      props.onCancel(false);
    };
    return (
      <>
        {open == true ? (
          <>
            <div id="shade" className="ai-modal-shade" onClick={close}>
              {position == "Top" ? (
                <div id="notification" className="ai-modal-notiBox-top">
                  <div className="ai-modal-innerBox">
                    <p className="ai-modal-title">{title}</p>
                    <button className="ai-modal-closeBtn" onClick={close}>
                      X
                    </button>
                    {children}
                  </div>
                </div>
              ) : (
                <></>
              )}
              {position == "Bottom" ? (
                <div id="notification" className="ai-modal-notiBox-bottom">
                  <div className="ai-modal-innerBox">
                    <p className="ai-modal-title">{title}</p>
                    <button className="ai-modal-closeBtn" onClick={close}>
                      X
                    </button>
                    {children}
                  </div>
                </div>
              ) : (
                <></>
              )}
              {position == "Left" ? (
                <div id="notification" className="ai-modal-notiBox-left">
                  <div className="ai-modal-innerBox">
                    <p className="ai-modal-title">{title}</p>
                    <button className="ai-modal-closeBtn" onClick={close}>
                      X
                    </button>
                    {children}
                  </div>
                </div>
              ) : (
                <></>
              )}
              {position == "Right" ? (
                <div id="notification" className="ai-modal-notiBox-right">
                  <div className="ai-modal-innerBox">
                    <p className="ai-modal-title">{title}</p>
                    <button className="ai-modal-closeBtn" onClick={close}>
                      X
                    </button>
                    {children}
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <>
            <div id="shade" className="ai-modal-none">
              <div id="notification" className="ai-modal-none">
                <div className="ai-modal-innerBox">
                  <p className="ai-modal-title">{title}</p>
                  <button className="ai-modal-closeBtn" onClick={close}>
                    X
                  </button>
                  {children}
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
);

export default Drawer;
