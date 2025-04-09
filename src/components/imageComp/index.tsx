import React from "react";
import styles from "./index.module.scss";
import cs from 'classnames'

const ImageComp: React.FC<{
  imgSrc:any
  className?:string
}> = ({imgSrc,className}) => {
  return (
    <div className={cs(className)}>
       <img className={styles.img_comp} src={imgSrc} alt="" />
    </div>
  );
};
export default ImageComp;
