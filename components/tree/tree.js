var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState } from "react";
import "./style/index.scss";
import TreeItem from "./treeItem";
import { handlerClick } from "./index";
const Tree = (props) => {
    const { list, checkbox } = props, restProps = __rest(props, ["list", "checkbox"]);
    const [classes, UseClasses] = useState("false");
    const handleClick = () => {
        classes === "false" ? UseClasses("truthy") : UseClasses("false");
    };
    return (React.createElement("div", { className: "ai-tree-standard" },
        React.createElement("div", { className: "ai-tree-header-first reactive-postion" },
            React.createElement("div", { className: "ai-tree-helper" }),
            React.createElement("span", { className: "ai-tree-arrow", "aria-hidden": "true", role: "presentation", onClick: handlerClick },
                React.createElement("svg", { viewBox: "0 0 24 24" },
                    React.createElement("path", { d: "M8,5.14V19.14L19,12.14L8,5.14Z" }))),
            checkbox === true && (React.createElement("div", { className: "ai-tree-checkbox", role: "checkbox", onClick: handleClick },
                React.createElement("div", { className: `ai-tree-checkbox-inner ai-tree-checkbox-inner-${classes}`, "aria-hidden": "true" },
                    React.createElement("input", { type: "checkbox", className: "q-checkbox-native" }),
                    React.createElement("div", { className: "ai-tree-checkbox__bg", style: {
                            backgroundColor: classes === "false" ? "white" : "currentColor",
                        } },
                        React.createElement("svg", { className: "ai-tree-svg", viewBox: "0 0 24 24" },
                            React.createElement("path", { className: "ai-tree-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })))))),
            React.createElement("div", { className: "ai-tree-node-header-content" },
                React.createElement("div", null, list && list[0].label))),
        React.createElement("div", null,
            React.createElement(TreeItem, Object.assign({ list: list && list[0].children, checkbox: checkbox, handleParent: () => {
                    handleClick();
                }, parentStatus: classes === "false" ? false : true }, restProps)))));
};
export default Tree;
