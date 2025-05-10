/*
 * @Author: Mark
 * @Date: 2025-05-10 19:27:45
 * @LastEditTime: 2025-05-10 19:30:58
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/table/scorer/index.tsx
 */

import Title from '../../_components/title';
import styles from './index.module.scss'
const Scorer: React.FC = () => {
return (
    <div className={styles.Scorer}>
      <Title title={'射手榜 '} isMore={false}/>
    </div>
  );
}
export default Scorer;