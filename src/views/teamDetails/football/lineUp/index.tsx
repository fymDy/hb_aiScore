import TeamSquad from "./_components/teamSquad";
import { PlayerGroup } from "./_types";
import { mockTeamSquad } from "./_types/data";

/*
 * @Author: Mark
 * @Date: 2025-05-26 16:08:06
 * @LastEditTime: 2025-05-28 20:16:52
 * @LastEditors: MarkMark
 * @Description: 佛祖保佑无bug
 * @FilePath: /hb_aiScore/src/views/teamDetails/football/lineUp/index.tsx
 */
const LineUp: React.FC = () => {
    return(
        <div>
            { mockTeamSquad?.groups?.map((item:PlayerGroup,i:number)=>(
                <TeamSquad key={i} data={item}/>
            ))}
        </div>
    )
}
  export default LineUp;