// import { EllipsisOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { memo } from 'react';
// import { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Article } from '~/models';
import './Blog.scss';
import CommentBlog from './CommentBlog';
import MainContentBlog from './MainContentBlog';
function Blog({ articles }: any) {
	return (
		<div style={{ marginTop: '56px' }}>
			{articles?.map((article: Article) => {
				const { slug, title, description, tagList, createdAt, author } = article;
				return (
					<Card key={uuidv4()} className="card-container" style={{ padding: 0 }}>
						{/* extra={<EllipsisOutlined />} */}

						{/* User */}
						<MainContentBlog
							slug={slug}
							title={title}
							description={description}
							tagList={tagList}
							author={author}
							createdAt={createdAt}
						/>

						<CommentBlog slug={slug} />

						{/* <!-- Card footer END --> */}
						<BackTop>
							<div className="back-top">
								<FaAngleDoubleUp />
							</div>
						</BackTop>
					</Card>
				);
			})}
		</div>
	);
}

export default memo(Blog);
