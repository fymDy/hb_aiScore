/*
 * @Author: Mark
 * @Date: 2025-05-04 19:31:38
 * @LastEditTime: 2025-05-04 23:57:46
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/matchDetails/data/teamsData/index.tsx
 */
import ISpan from '@/components/Common/ISpan'
import styles from './index.module.scss'
const teamsData: React.FC<{
    data?:any
}> =({data})=>{
    console.log(data)
    return(
        <section className={styles.teamsData}>
            <div className={styles.teamsData_top}>
                <p className={styles.ballPossession}>
                    <ISpan className={styles.ballPossession_name} name={data?.home?.possession?.name}></ISpan>
                    <span className={styles.ballPossession_box}>
                            <ISpan style={{width:'47%'}} className={styles.home} name={data?.home?.possession?.value}></ISpan>
                            <ISpan style={{width:'53%'}} className={styles.away} name={data?.away?.possession?.value}></ISpan>
                    </span>
                </p>
              
                <p className={styles.ballShots}>
                        <ISpan name={data?.home?.shots?.total?.value}></ISpan>
                        <ISpan name={data?.home?.shots?.total?.name}></ISpan>
                        <ISpan name={data?.away?.shots?.total?.value}></ISpan>
                </p>
                <p className={styles.ballPossession2}>
                    <span className={styles.left} >
                        <ISpan  className={styles.num} name={data?.home?.possession?.value}></ISpan>
                        <ISpan  className={styles.door} name={data?.away?.possession?.value}></ISpan>
                    </span>
                    <span className={styles.right}>
                            <ISpan  className={styles.num} name={data?.home?.possession?.value}></ISpan>
                            <ISpan  className={styles.door} name={data?.away?.possession?.value}></ISpan>
                    </span>
                </p>
            </div>
            <ul className={styles.teamsData_stats}>
                 <li className={styles.shots}>
                        <ISpan name={data?.home?.shots?.blocked?.value}></ISpan>
                        <ISpan name={data?.home?.shots?.blocked?.name}></ISpan>
                        <ISpan name={data?.away?.shots?.blocked?.value}></ISpan>
                </li>
                <li className={styles.corners}>
                        <ISpan name={data?.home?.corners?.value}></ISpan>
                        <ISpan name={data?.home?.corners?.name}></ISpan>
                        <ISpan name={data?.away?.corners?.value}></ISpan>
                </li>
                <li className={styles.offsides}>
                        <ISpan name={data?.home?.offsides?.value}></ISpan>
                        <ISpan name={data?.home?.offsides?.name}></ISpan>
                        <ISpan name={data?.away?.offsides?.value}></ISpan>
                </li>
                <li className={styles.fouls}>
                        <ISpan name={data?.home?.fouls?.value}></ISpan>
                        <ISpan name={data?.home?.fouls?.name}></ISpan>
                        <ISpan name={data?.away?.fouls?.value}></ISpan>
                </li>
                <li className={styles.yellow_cards}>
                        <ISpan name={data?.home?.yellow_cards?.value}></ISpan>
                        <ISpan name={data?.home?.yellow_cards?.name}></ISpan>
                        <ISpan name={data?.away?.yellow_cards?.value}></ISpan>
                </li>
                <li className={styles.red_cards}>
                        <ISpan name={data?.home?.red_cards?.value}></ISpan>
                        <ISpan name={data?.home?.red_cards?.name}></ISpan>
                        <ISpan name={data?.away?.red_cards?.value}></ISpan>
                </li>
                <li className={styles.total}>
                        <ISpan name={data?.home?.passes?.total?.value}></ISpan>
                        <ISpan name={data?.home?.passes?.total?.name}></ISpan>
                        <ISpan name={data?.away?.passes?.total?.value}></ISpan>
                </li>
                <li className={styles.key_passes}>
                        <ISpan name={data?.home?.passes?.key_passes?.value}></ISpan>
                        <ISpan name={data?.home?.passes?.key_passes?.name}></ISpan>
                        <ISpan name={data?.away?.passes?.key_passes?.value}></ISpan>
                </li>
                <li className={styles.accurate}>
                        <ISpan name={data?.home?.passes?.accurate?.value}></ISpan>
                        <ISpan name={data?.home?.passes?.accurate?.name}></ISpan>
                        <ISpan name={data?.away?.passes?.accurate?.value}></ISpan>
                </li>
                <li className={styles.crosses}>
                        <ISpan name={data?.home?.passes?.crosses?.value}></ISpan>
                        <ISpan name={data?.home?.passes?.crosses?.name}></ISpan>
                        <ISpan name={data?.away?.passes?.crosses?.value}></ISpan>
                </li>
                <li className={styles.long_balls}>
                        <ISpan name={data?.home?.passes?.long_balls?.value}></ISpan>
                        <ISpan name={data?.home?.passes?.long_balls?.name}></ISpan>
                        <ISpan name={data?.away?.passes?.long_balls?.value}></ISpan>
                </li>
                <li className={styles.tackles}>
                        <ISpan name={data?.home?.tackles?.value}></ISpan>
                        <ISpan name={data?.home?.tackles?.name}></ISpan>
                        <ISpan name={data?.away?.tackles?.value}></ISpan>
                </li>
                <li className={styles.interceptions}>
                        <ISpan name={data?.home?.interceptions?.value}></ISpan>
                        <ISpan name={data?.home?.interceptions?.name}></ISpan>
                        <ISpan name={data?.away?.interceptions?.value}></ISpan>
                </li>
                <li className={styles.clearances}>
                        <ISpan name={data?.home?.clearances?.value}></ISpan>
                        <ISpan name={data?.home?.clearances?.name}></ISpan>
                        <ISpan name={data?.away?.clearances?.value}></ISpan>
                </li>
                <li className={styles.saves}>
                        <ISpan name={data?.home?.saves?.value}></ISpan>
                        <ISpan name={data?.home?.saves?.name}></ISpan>
                        <ISpan name={data?.away?.saves?.value}></ISpan>
                </li>
            
            </ul>

        </section>
    )
}
export default teamsData