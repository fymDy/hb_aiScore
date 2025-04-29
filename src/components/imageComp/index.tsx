import React, { ReactNode } from "react";
import styles from "./index.module.scss";
import cs from 'classnames'
import Images from "../Common/Images";

const ImageComp: React.FC<{
  imgSrc:any
  className:string
  children?:ReactNode
}> = ({imgSrc,className,children}) => {
  return (
    <div className={styles.ImageComp}>
       <Images className={cs(className)} imgSrc={imgSrc} />
       {children}
    </div>
  );
};
export default ImageComp;
