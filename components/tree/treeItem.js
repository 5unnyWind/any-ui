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
import { handlerClick } from "./index";
const TreeItem = (props) => {
    const { list, checkbox, handleParent, parentStatus } = props, restProps = __rest(props, ["list", "checkbox", "handleParent", "parentStatus"]);
    const [classes, UseClasses] = useState(list);
    const handleClick = (_, index, status) => {
        const temp = classes.map((item, key) => {
            if (key === index) {
                if (status) {
                    item.check = status;
                }
                else if (parentStatus) {
                    item.check = false;
                }
                else {
                    item.check = item.check ? false : true;
                }
            }
            else {
                if (parentStatus) {
                    item.check = true;
                }
            }
            return item;
        });
        UseClasses(temp);
        if (handleParent) {
            if (classes.every((item) => item.check === true)) {
                handleParent(_, true);
            }
            else {
                if (parentStatus) {
                    handleParent(_, false);
                }
            }
        }
    };
    return (React.createElement(React.Fragment, null, list === null || list === void 0 ? void 0 : list.map((item, index) => {
        return (React.createElement("div", { key: index, className: "ai-tree-collapside" },
            React.createElement("div", { className: "ai-tree-children" },
                React.createElement("div", { className: `reactive-postion ai-tree-node-parent ${index === list.length - 1
                        ? "ai-tree-node-last"
                        : "ai-tree-node"}` },
                    React.createElement("div", { className: "ai-tree-header" },
                        React.createElement("div", { className: "ai-tree-helper" }),
                        list[index].children ? (React.createElement("span", { onClick: handlerClick, className: "ai-tree-arrow", "aria-hidden": "true", role: "presentation" },
                            React.createElement("svg", { viewBox: "0 0 24 24" },
                                React.createElement("path", { d: "M8,5.14V19.14L19,12.14L8,5.14Z" })))) : (React.createElement(React.Fragment, null)),
                        checkbox === true && (React.createElement("div", { className: "ai-tree-checkbox", role: "checkbox", onClick: (e) => handleClick(e, index), "aria-hidden": "true" },
                            React.createElement("div", { className: `ai-tree-checkbox-inner ai-tree-checkbox-inner-${parentStatus === true
                                    ? "truthy"
                                    : classes[index].check
                                        ? "truthy"
                                        : "false"}`, "aria-hidden": "true" },
                                React.createElement("input", { type: "checkbox", className: "q-checkbox-native" }),
                                React.createElement("div", { className: "ai-tree-checkbox__bg", style: {
                                        backgroundColor: parentStatus === true
                                            ? "currentColor"
                                            : classes[index].check
                                                ? "currentColor"
                                                : "white",
                                    } },
                                    React.createElement("svg", { className: "ai-tree-svg", viewBox: "0 0 24 24" },
                                        React.createElement("path", { className: "ai-tree-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" })))))),
                        React.createElement("div", { className: "ai-tree-node-header-content" },
                            React.createElement("div", null, item.label))),
                    React.createElement("div", { style: { display: "none" } },
                        React.createElement(TreeItem, Object.assign({ list: list[index].children, checkbox: checkbox, handleParent: (e, status) => {
                                handleClick(e, index, status);
                            }, parentStatus: parentStatus || list[index].check }, restProps)))))));
    })));
};
export default TreeItem;
