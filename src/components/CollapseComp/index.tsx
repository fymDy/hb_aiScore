/*
 * @Author: Mark
 * @Date: 2025-04-26 14:17:21
 * @LastEditTime: 2025-04-26 16:42:43
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/components/CollapseComp/index.tsx
 */
import React from "react";
import { Collapse, CollapsePanel } from "../Common/Collapse";

const CollapseComp: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Collapse accordion={false}>
      {data?.map((item: any,i:number) => (
        <CollapsePanel keyIndex={i} key={i} header={item.title} panelKey={item.id}>
          {item?.data?.map((child: any) => (
            <span key={child.id}>
              {child.name}
            </span>
          ))}
        </CollapsePanel>
      ))}
    </Collapse>
  );
};
export default CollapseComp;
