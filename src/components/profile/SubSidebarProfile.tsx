import Blog from '../Blog';
import Sidebar from '../Sidebar';
import SidebarData from './SidebarDataProfile';

function SubSidebarProfile() {
	const dataSub = SidebarData();
	return (
		<>
			<Sidebar dataSub={dataSub} />
			<Blog />
		</>
	);
}

export default SubSidebarProfile;
