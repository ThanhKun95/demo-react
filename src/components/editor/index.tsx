import HeaderEditor from './HeaderEditor';
import EditorBody from './BodyEditor';
import './Editor.scss';

function Editor() {
	return (
		<div className="editor">
			<HeaderEditor />
			<EditorBody />
		</div>
	);
}

export default Editor;
