import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import cs from 'classnames'
import Images from "../Common/Images";

const ImageComp: React.FC<{
  imgSrc:any
  className:string
  imgStyle?:any,
  children?:ReactNode
}> = ({imgSrc,className,imgStyle,children}) => {
  return (
    <div className={styles.ImageComp}>
       <Images className={cs(className)} imgSrc={imgSrc} imgStyle={imgStyle}/>
       {children}
    </div>
  );
};
export default ImageComp;
