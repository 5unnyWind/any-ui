// export default class MenuItem extends React.Component<IMenuItemProps, any> {
// 	static propTypes = {
// 		...
// 		index: PropTypes.string // item 的唯一标志
// 	}
// 	static defaultProps = {...}

//     static contextTypes = {
//         level: PropTypes.number,
//         mode: PropTypes.string,
//         onClick: PropTypes.func,
//         onSelect: PropTypes.func,
//         selectedKeys: PropTypes.arrayOf(PropTypes.string)
//     };
// constructor(props) {
//         super(props);
//         this.state = {
//             expanded: false,
//             isSelected: false
//         };
//     }

//     componentWillReceiveProps(nextProps, nextContext) {
//         const selectedKeys = nextContext.selectedKeys;
//         const key = this.props.index;
//         if (selectedKeys.indexOf(key) > -1) {
//             this.setState({
//                 isSelected: true
//             });
//         } else {
//             this.setState({
//                 isSelected: false
//             });
//         }
//     }

//     componentDidMount() {
//         const selectedKeys = this.context.selectedKeys;
//         const key = this.props.index;
//         if (selectedKeys.indexOf(key) > -1) {
//             this.setState({
//                 isSelected: true
//             });
//         } else {
//             this.setState({
//                 isSelected: false
//             });
//         }
//     }

//     onClickItem(e) {
//         this.setState({isSelected: !this.state.isSelected}, () => {
//             const {index} = this.props;
//             const params: ClickParam = {
//                 domEvent: e,
//                 item: this,
//                 key: index,
//                 keyPath: [index]
//             };
//             this.context.onSelect(params);
//             this.context.onClick(params);
//         });
//     }

//     render() {
//         const {
//             classPrefix,
//             className,
//             index,
//             style,
//             disabled,
//             children,
//             ...restProps
//         } = this.props;

//         const {isSelected, expanded} = this.state;
//         const {mode, level} = this.context;

//         const menuItem = (
//             <div
//                 className={classNames(`${classPrefix}-content`, {
//                     [`${classPrefix}-content-selected`]: isSelected,
//                     [`${classPrefix}-vertical-content`]: mode === 'vertical',
//                     [`${classPrefix}-horizontal-content`]: mode === 'horizontal'
//                 })}
//                 style={style}
//             >
//                 {children}
//             </div>
//         );

//         return (
//             // TODO: Tooltip is for inlineCollapsed, set visible to false tempararily
//             <li
//                 {...restProps}
//                 className={classNames(classPrefix, className, {
//                     [`${classPrefix}-vertical`]: mode === 'vertical',
//                     [`${classPrefix}-horizontal`]: mode === 'horizontal',
//                     [`${classPrefix}-vertical-selected`]: isSelected && mode === 'vertical',
//                     [`${classPrefix}-horizontal-selected`]: isSelected && mode === 'horizontal' && level === 1,
//                     [`${classPrefix}-disabled`]: disabled
//                 })}
//                 onClick={!disabled && this.onClickItem.bind(this)}
//             >
//                 <Tooltip
//                     visible={expanded}
//                     direction="right"
//                     message={menuItem}
//                     className={classNames(`${classPrefix}-tooltip`, {

//                     })}
//                     trigger="hover"
//                     showArrow={false}
//                 >
//                     {menuItem}
//                 </Tooltip>
//             </li>
//         );
//     }
// }
