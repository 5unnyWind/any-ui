import React, { useState } from "react";
import classNames from "classnames";
import "./style/index.scss";

export interface Modalprops
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  className?: string;
  title?: string; //传入的标题
  headStyle?: React.CSSProperties; //用户传入标题样式
  style?: React.CSSProperties; //用户传入整体样式
  bodyStyle?: React.CSSProperties; //用户传入的内容样式
  children?: React.ReactNode;
  open?: any;
  onOk?: any;
  onCancel?: any;
  okText?: string;
  cancelText?: string;
}
const Modal = React.forwardRef(
  (props: Modalprops, ref: React.Ref<HTMLDivElement>) => {
    console.log(props);
    var {
      title,
      headStyle = {},
      bodyStyle,
      style,
      children,
      open,
      onOk,
      onCancel,
      okText,
      cancelText,
      ...others
    } = props;

    const shade: any = document.getElementById("shade");
    const noti: any = document.getElementById("notification");
    const close: any = () => {
      shade.className = "ai-modal-none";
      noti.className = "ai-modal-none";
      props.onOk(false);
      props.onCancel(false);
    };
    return (
      <>
        {props.open == true ? (
          <>
            <div id="shade" className="ai-modal-shade" onClick={close}></div>
            <div id="notification" className="ai-modal-notiBox">
              <div className="ai-modal-innerBox">
                <p className="ai-modal-title">balabala</p>
                <button className="ai-modal-closeBtn" onClick={close}>
                  X
                </button>
                {children}
                <button className="ai-modal-confirmBtn" onClick={close}>
                  {okText}
                </button>
                <button className="ai-modal-cancelBtn" onClick={close}>
                  取 消
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div id="shade" className="ai-modal-none"></div>
            <div id="notification" className="ai-modal-none">
              <div className="ai-modal-innerBox">
                <p className="ai-modal-title">balabala</p>
                <button className="ai-modal-closeBtn" onClick={close}>
                  X
                </button>
                {children}
                <button className="ai-modal-confirmBtn" onClick={close}>
                  {okText}
                </button>
                <button className="ai-modal-cancelBtn" onClick={close}>
                  取 消
                </button>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
);

export default Modal;
