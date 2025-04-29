import React from 'react';
import CheckboxComp from '@/components/CheckboxComp';
import styles from './index.module.scss';
import OddsTable, { OddsData } from '../oddsTable';
import PageFilter from '@/views/home/acomponents/pageFilter';
import OddsType from '../oddsType';
import BtnGroup from '@/components/Common/btnGroup';
import { IFSearchResult } from '@/views/home/interface';

//封装在一起，暂时不用这个DOM

interface CheckboxOption {
  label: string;
  value: string;
}

interface OddsTypeDataItem {
  label: string;
  value: string;
}

interface OddsBoxProps {
  // 传入四个子组件需要的所有数据
  btnGroupData: IFSearchResult[];

  onclick: (id: string) => void;

  checkboxData: CheckboxOption[];
  checkedList: any[];
  onCheckedChange: (list: string[]) => void;
  tableData: OddsData[];
  onArrowClick: (bookmaker: string) => void;

  oddsTypeData: OddsTypeDataItem[];
}

const OddsBox: React.FC<OddsBoxProps> = ({
  btnGroupData,
  onclick,
  checkboxData,
  checkedList,
  onCheckedChange,
  tableData,
  onArrowClick,
  oddsTypeData,
}) => {
  return (
    <section className={styles.OddsBox}>
      {/* 过滤器 */}
      <BtnGroup
        className={styles.filter_wrap}
        dataList={btnGroupData}
        onclick={onclick}
      />

      {/* 复选框 */}
      <CheckboxComp
        className={styles.checkBox_Wrap}
        options={checkboxData}
        checkedList={checkedList}
        onChange={onCheckedChange}
      />

      {/* 表格 */}
      <OddsTable
        data={tableData}
        selectedTypes={checkedList}
        onArrowClick={onArrowClick}
      />

      {/* 底部赔率类型提示 */}
      <OddsType data={oddsTypeData} />
    </section>
  );
};

export default OddsBox;
