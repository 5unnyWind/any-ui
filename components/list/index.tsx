import React, { ReactNode } from "react";
import "./style/list.scss"
import classNames from "classnames";
export type ListSize = "lg" | "md" | "sm";
interface ListProps{
    dataSource ? : any[];
    size ? : ListSize;
    header ? : ReactNode;
    footer ? : ReactNode;
    bordered ? : boolean;
    renderItem ?: (item: string, index: number) => React.ReactNode;
}
const List : React.FC<ListProps> = (props)=>{
    const {
        dataSource,
        size,
        header,
        footer,
        bordered,
        renderItem
    } = props;
    const renderInnerItem = (item: string, index: number) => {
        if (!renderItem) return null;
        return <React.Fragment>{renderItem(item, index)}</React.Fragment>;
      };
    let splitDataSource = dataSource;
    let childrenContent:ReactNode;
    if (splitDataSource && splitDataSource.length > 0) {
        const items = splitDataSource.map((item: string, index: number) => renderInnerItem(item, index));
        childrenContent = <div className={`ai-list`}>{items}</div>
    }
    const classes = classNames("ai-listItem",  {
        [`ai-li-${size}`]: size, // size 参数存在时动态添加 `ai-li-${size}` 类 , size:padding
      });
    const listclasses = classNames("ai-list",  {
        [`ai-li-bordered-${String(bordered)}`] : bordered,
    }
    )    
    return(
        <>
        <div className={listclasses}>
            { footer && <div className= {classes}>{header}</div>}
                <>{
                !renderItem && 
                dataSource &&
                dataSource.map(data =>(
                <div className={classes}>
                    {data}
                </div>
                ) ) }  </>         
            { renderItem && <>{childrenContent}</>}
            {header && <div className={classes}>{footer}</div>}      
        </div></>
    )
}
List.defaultProps = {
    size:"md",
    dataSource:[],
    bordered:true
  };
  
export default List;