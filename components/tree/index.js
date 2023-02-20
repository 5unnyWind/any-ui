const changeParent = (e) => {
    var _a, _b;
    ((_a = e.currentTarget.parentNode) === null || _a === void 0 ? void 0 : _a.nextSibling).style.display =
        ((_b = e.currentTarget.parentNode) === null || _b === void 0 ? void 0 : _b.nextSibling).style.display ===
            "block"
            ? "none"
            : "block";
};
export const handlerClick = (e) => {
    e.currentTarget.className =
        e.currentTarget.className === "ai-tree-arrow"
            ? "ai-tree-arrow ai-tree-arrow-rotate"
            : "ai-tree-arrow";
    changeParent(e);
};
