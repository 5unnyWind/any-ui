// import {Transition} from 'react-transition-group';
// import Popover from '../Popover/Popover';
// import React from 'react';

// const SubMenu:React.FC<ISubMenuProps, any> = (props) => {
// 	static propTypes = {
// 		...
// 		disabled: PropTypes.bool,
//         key: PropTypes.string,
//         expanded: PropTypes.bool
// 	}
// 	static defaultProps = {...}

// 	// 来自父组件 Menu 或 SubMenu
// 	static contextTypes = {
//         level: PropTypes.number
//     };
//     // 作为父组件传递 context
//     static childContextTypes = {
//         level: PropTypes.number
//     };
//     // 可能有 subMenu -> subMenu 情况
//     getChildContext() {
//         return {
//             level: this.context.level + 1
//         };
//     }

// 	...
// 	render() {
// 		const {...} = this.props;
// 		const {mode, level} = this.context;
// 		// Menu 为横向布局时
// 		const popMenuItems = (
//             <ul className={`${classPrefix}-pop`} style={{minWidth: 100}}>
//                 {children && <div className={`${classPrefix}-pop-content`}>{children}</div>}
//             </ul>
//         );
//         // SubMenu 本体
//         const subMenu = (
//             <div
//                 className={`${classPrefix}-title`}
//                 onClick={this.onTitleClick.bind(this)}
//             >
//                 <div className={`${classPrefix}-title-content`} style={style}>
//                     {title}
//                     {mode === 'vertical' && <Icon type={`arrow-${this.state.expanded ? 'up' : 'down'}`} className={`${classPrefix}-arrow`}/>}
//                 </div>
//             </div>
//         );

// return (
//             <li
//                 {...restProps}
//                 key={key}
//                 ref="submenu"
//                 className={classNames(classPrefix, className, {
//                     [`${classPrefix}-disabled`]: disabled,
//                     [`${classPrefix}-horizontal`]: mode === 'horizontal' && level === 1
//                 })}
//             >
//                 {
//                     mode === 'horizontal'
//                     ? <Popover
//                         direction={level === 1 ? 'bottom' : 'rightTop'}
//                         content={popMenuItems}
//                         className={...}
//                         trigger="hover"
//                     >
//                         {subMenu}
//                     </Popover>
//                     : subMenu
//                 }
//                 <Transition ... in={this.state.expanded}>
//                     <ul className={`${classPrefix}-sub`}>
//                         {children}
//                     </ul>
//                 </Transition>
//             </li>
//         );
// 	}
// }
