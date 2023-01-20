//   return (
//     <>
//       <div className="ai-tree-standard">
//         <div className="ai-tree-node-last reactive-postion ai-tree-node-parent">
//           <div className="ai-tree-header-first reactive-postion ai-tree-link">
//             <div className="ai-tree-helper"></div>
//             <span
//               className="ai-tree-arrow"
//               aria-hidden="true"
//               role="presentation"
//             >
//               <svg viewBox="0 0 24 24">
//                 <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
//               </svg>
//             </span>
//             <div className="ai-tree-node-header-content">
//               <div>12312312</div>
//             </div>
//           </div>
//           <div className="ai-tree-collapside">
//             <div className="ai-tree-children">
//               <div className="ai-tree-node-last reactive-postion ai-tree-node-parent">
//                 <div className="ai-tree-header">
//                   <div className="ai-tree-helper"></div>
//                   <span
//                     className="ai-tree-arrow"
//                     aria-hidden="true"
//                     role="presentation"
//                   >
//                     <svg viewBox="0 0 24 24">
//                       <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
//                     </svg>
//                   </span>
//                   <div className="ai-tree-node-header-content">
//                     <div>12312312</div>
//                   </div>
//                 </div>
//                 <div className="ai-tree-collapside">
//                   <div className="ai-tree-children">
//                     <div className="ai-tree-node-last reactive-postion">
//                       <div className="ai-tree-header reactive-postion">
//                         <div className="ai-tree-helper"></div>
//                         <div className="ai-tree-node-header-content">
//                           <div>12312312</div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Tree;
import React from "react";
import "./style/index.scss";
import type { TreeProps } from "./index";
import TreeItem from "./treeItem";

const Tree: React.FC<TreeProps> = (props) => {
  const { list, ...restProps } = props;
  return (
    <div className="ai-tree-standard">
      <div className="ai-tree-header-first reactive-postion">
        <div className="ai-tree-helper"></div>
        <span className="ai-tree-arrow" aria-hidden="true" role="presentation">
          <svg viewBox="0 0 24 24">
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z"></path>
          </svg>
        </span>
        <div className="ai-tree-node-header-content">
          <div>{list && list[0].label}</div>
        </div>
      </div>
      <TreeItem list={list && list[0].children} {...restProps}></TreeItem>
    </div>
  );
};

export default Tree;
