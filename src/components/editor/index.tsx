import HeaderEditor from './HeaderEditor';
import EditorBody from './BodyEditor';
import './Editor.scss';
import { useAppSelector } from '~/app/hooks';

function Editor() {
	const { auth } = useAppSelector((state) => state);

	return (
		<div className="editor">
			{auth.isLoggedIn && <HeaderEditor />}
			<EditorBody />
		</div>
	);
}

export default Editor;
