import {FaFire, FaPoo} from 'react-icons/fa';
import {BsPlus, BsFillLightningFill, BsGearFill,BsFillCameraVideoFill} from 'react-icons/bs'
const SideBar = () => {
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0
        flex flex-col
        bg-primary text-secondary">
            <i>A</i>
            <i>B</i>
            <i>C</i>
            <i>D</i>
            <i>E</i>
<SideBarIcon icon={<FaFire size="28" />} />
<SideBarIcon icon={<BsPlus size="32" />} />
<SideBarIcon icon={<BsFillLightningFill size="28" />} />
<SideBarIcon icon={<BsGearFill size="28" />} />
<SideBarIcon icon={<BsFillCameraVideoFill size="28" />} />


        </div>
    )
}
const SideBarIcon = ({ icon }) => (
    <div className="sidebar-icon">
        {icon}
    </div>
);

export default SideBar;