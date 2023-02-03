// import React from 'react';
// import moduleName from 'module';

// export default class Menu extends React.Component<IMenuProps, any> {
// 	static propTypes = {...}
// 	static defaultProps = {...}

//     static Item = MenuItem;
//     static SubMenu = SubMenu;

//     static childContextTypes = {
//         level: PropTypes.number,
//         mode: PropTypes.string,
//         onClick: PropTypes.func,
//         onSelect: PropTypes.func,
//         selectedKeys: PropTypes.arrayOf(PropTypes.string)
//     };

//     getChildContext() {
//         return {
//             level: 1,
//             mode: this.props.mode,
//             onClick: this.onClick,
//             onSelect: this.onSelect,
//             selectedKeys: this.state.selectedKeys
//         };
//     }

// 	constructor(props) {
//         super(props);
//         this.state = {
//             selectedKeys: this.props.selectedKeys || []
//         };
//     }

// 	onSelect = (params: ClickParam) => {
//         this.setState({
//             selectedKeys: [params.key]
//         });

//         if (this.props.onSelect) {
//             this.props.onSelect(params);
//         }
//     }

//     onClick = (params: ClickParam) => {
//         const {onClick} = this.props;
//         if (typeof onClick === 'function') {
//             onClick(params);
//         }
//     }

// 	  render() {
//         const {
//             classPrefix,
//             className,
//             style,
//             children,
//             mode,
//             onClick,
//             selectedKeys,
//             ...restProps
//         } = this.props;

//         return (
//             <div
//                 className={classNames(className, `${classPrefix}-container`, {

//                 })}
//                 ref="menus-container"
//                 style={style}
//                 {...restProps}
//             >
//                 <ul
//                     className={classNames(classPrefix, {
//                         [`${classPrefix}-vertical`]: mode === 'vertical',
//                         [`${classPrefix}-horizontal`]: mode === 'horizontal'
//                     })}
//                 >
//                     {children}
//                 </ul>
//             </div>
//         );
//     }
// }
