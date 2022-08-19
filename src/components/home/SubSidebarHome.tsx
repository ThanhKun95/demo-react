import Sidebar from '../Sidebar';
import SidebarData from './SidebarDataHome';
function SubSidebarHome() {
	const dataSub = SidebarData();
	return (
		<>
			<Sidebar dataSub={dataSub} />
		</>
	);
}

export default SubSidebarHome;
