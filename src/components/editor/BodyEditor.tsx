import { Button, Form, Input } from 'antd';
const { TextArea } = Input;

function EditorBody() {
    return (
        <div className="editor-body">
            <Form layout="horizontal">
                <Form.Item>
                    <Input placeholder="Article title" />
                </Form.Item>
                <Form.Item>
                    <Input placeholder="What this article about?" />
                </Form.Item>

                <Form.Item>
                    <TextArea rows={4} placeholder="White your article" />
                </Form.Item>

                <Form.Item style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="primary">Publish Article</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default EditorBody;
