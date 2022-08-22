import Sidebar from '../Sidebar';
import SidebarData from './SidebarDataProfile';

function SubSidebarProfile() {
	const dataSub = SidebarData();
	return <>{dataSub && <Sidebar dataSub={dataSub} />}</>;
}

export default SubSidebarProfile;
