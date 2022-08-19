import { Button, Form, Input, message, Select, Typography } from 'antd';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { articleActions } from '~/features/article/ArticleSlice';
import { Article } from '~/models';

const { TextArea } = Input;
const { Text } = Typography;
function EditorBody() {
	const [loading, setLoading] = useState(false);

	const dispatch = useAppDispatch();
	const { articles } = useAppSelector((state) => state);
	const navigate = useNavigate();
	const { isCreateSuccess, isCreateFailed, updateSuccess, updateFailed } = articles;

	// Create
	useEffect(() => {
		setLoading(false);

		if (isCreateSuccess) {
			message.success('Create article success');
			dispatch(articleActions.ARTICLE_RESET());
			navigate('/');
		}

		// Handle loading Spin
	}, [isCreateSuccess, isCreateFailed]);

	// Update
	useEffect(() => {
		setLoading(false);

		if (updateSuccess) {
			message.success('Update article success');
			dispatch(articleActions.ARTICLE_RESET());
			navigate('/');
		}
	}, [updateSuccess, updateFailed]);

	const { slugUpdate } = useParams();

	const onFinish = (values: any) => {
		setLoading(true);
		if (slugUpdate) {
			const data = { slug: slugUpdate, data: { article: values } };
			dispatch(articleActions.UPDATE(data));
		} else {
			dispatch(
				articleActions.IS_CREATE({
					article: values,
				}),
			);
		}
	};
	const [form] = Form.useForm();

	useEffect(() => {
		if (slugUpdate) {
			const dataUpdate = articles.articles.articles.find(
				(article: Article) => slugUpdate === article.slug,
			);
			const { title, description, body, tagList } = dataUpdate;
			form.setFieldsValue({
				title,
				description,
				body,
				tagList,
			});
		}
	}, []);
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	return (
		<div className="editor-body">
			<div style={{ padding: 10, height: 42 }}>
				<Text type="danger">{isCreateFailed && 'Can not create the article'} </Text>
			</div>
			<Form
				layout="horizontal"
				form={form}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					name="title"
					rules={[{ required: true, message: 'Please input your title!' }]}
				>
					<Input placeholder="Article title" />
				</Form.Item>
				<Form.Item
					name="description"
					rules={[{ required: true, message: 'Please input your description!' }]}
				>
					<Input placeholder="What this article about?" />
				</Form.Item>

				<Form.Item
					name="body"
					rules={[{ required: true, message: 'Please input your article!' }]}
				>
					<TextArea rows={4} placeholder="White your article" />
				</Form.Item>

				<Form.Item name="tagList">
					<Select mode="tags" style={{ width: '100%' }} placeholder="Enter Tags"></Select>
				</Form.Item>

				<div style={{ display: 'flex', justifyContent: 'flex-end' }}>
					<Button type="primary" htmlType="submit" key="submit" loading={loading}>
						{slugUpdate ? 'Update Article' : 'Publish Article'}
					</Button>
				</div>
			</Form>
		</div>
	);
}

export default EditorBody;
