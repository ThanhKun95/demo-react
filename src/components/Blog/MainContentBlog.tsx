import { Avatar, Card } from 'antd';
import { memo } from 'react';
import moment from 'moment';
import { NavLink, useNavigate } from 'react-router-dom';
import { ButtonHeart, Comment, Share } from '~/components/Button';
import './Blog.scss';
const { Meta } = Card;

function MainContentBlog({ slug, title, description, tagList, createdAt, author }: any) {
    const navigate = useNavigate();

    function rand() {
        return Math.floor(Math.random() * 90);
    }
    return (
        <>
            <Meta
                avatar={
                    <span
                        className="cursor-pointer"
                        onClick={() => {
                            navigate(`/article/${author.username}`);
                        }}
                    >
                        <Avatar src={author.image} style={{ width: '60px', height: '60px' }} />{' '}
                    </span>
                }
                title={
                    <span
                        className="cursor-pointer"
                        onClick={() => {
                            navigate(`/article/${author.username}`);
                        }}
                    >
                        {author.username}
                    </span>
                }
                description={moment(createdAt).format('DD MMMM YYYY')}
                style={{ padding: ' 24px' }}
            />
            {/* Title */}
            <div>
                <Card
                    bordered={false}
                    style={{
                        padding: '0 24px ',
                        textAlign: 'start',
                        fontWeight: 'bold',
                    }}
                >
                    {title}
                </Card>
                <span
                    style={{
                        padding: '0 24px ',
                        textAlign: 'start',
                    }}
                >
                    {tagList.map((tag: string) => (
                        <NavLink to={`/article/${slug}`} key={tag}>
                            {' '}
                            #{tag}
                        </NavLink>
                    ))}
                </span>
                <Card bordered={false} style={{ padding: '0 24px 24px 24px ', textAlign: 'start' }}>
                    {description}
                </Card>
                {/* <!-- Card img --> */}
                <Card
                    style={{ width: '100%', border: 'none' }}
                    cover={
                        <div className="img-container-blog">
                            <img
                                alt="example"
                                className="img-container-item"
                                src={'https://picsum.photos/' + (200 + rand()) + '/' + (200 + rand()) + '?random=1'}
                            />
                        </div>
                    }
                />

                <Card
                    className="card-action"
                    style={{ width: '100%', border: 0 }}
                    actions={[<ButtonHeart liked>15K</ButtonHeart>, <Comment>4000</Comment>, <Share>20K</Share>]}
                />
            </div>
        </>
    );
}

export default memo(MainContentBlog);
