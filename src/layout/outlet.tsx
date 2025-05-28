
import { Outlet } from 'react-router';

const LayoutOutlet:React.FC<{
  contentData?:any
}> = ({
  contentData
}) => {
  return <Outlet context={contentData}/>
};

export default LayoutOutlet;