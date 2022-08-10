// import { EllipsisOutlined } from '@ant-design/icons';
import { Card, Input } from 'antd';
import { memo } from 'react';
// import { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import { useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { Comment } from '~/components/Button';
import { articleActions } from '~/features/article/ArticleSlice';
import { currUserActions } from '~/features/currUser/CurrUserSlice';
import { Article } from '~/models';
import './Blog.scss';
import CommentBlog from './CommentBlog';
import MainContentBlog from './MainContentBlog';
function Blog() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(articleActions.GET_ARTICLE());
        dispatch(currUserActions.GET_USER_CURR());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const { auth, articles } = useAppSelector((state) => state);

    return (
        <div style={{ marginTop: '56px' }}>
            {articles?.articles?.articles?.map((article: Article) => {
                const { slug, title, description, tagList, createdAt, author } = article;
                return (
                    <Card key={uuidv4()} className="card-container" style={{ padding: 0 }}>
                        {/* extra={<EllipsisOutlined />} */}

                        {/* User */}
                        <MainContentBlog
                            title={title}
                            description={description}
                            tagList={tagList}
                            author={author}
                            createdAt={createdAt}
                        />
                        {auth.isLoggedIn && (
                            <Input
                                addonAfter={
                                    <Card
                                        style={{
                                            height: '38px',
                                            border: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            overflow: 'hidden',
                                        }}
                                        actions={[<Comment />]}
                                    ></Card>
                                }
                                defaultValue=""
                                placeholder="White a comment..."
                            />
                        )}
                        <div style={{ width: '100%' }}>
                            {/* <!-- Comment wrap START --> */}
                            <ul className="list-comment">
                                <CommentBlog slug={slug} />

                                <div
                                    style={{
                                        textAlign: 'start',
                                        margin: '20px 0',
                                        fontWeight: 700,
                                        color: '#65676b',
                                    }}
                                >
                                    Load more comments
                                </div>
                            </ul>
                            {/* <!-- Comment wrap END --> */}
                        </div>

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
