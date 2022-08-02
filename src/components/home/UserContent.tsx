import { Avatar, Card, Input } from 'antd';
import { ButtonHeart, Comment, Share } from '~/components/Button';
import './UserContent.scss';

import { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
const { Meta } = Card;

function UserContent() {
    const [loading, setLoading] = useState(true);

    const onChange = (checked: boolean) => {
        setLoading(!checked);
    };

    return (
        <Card
            title="Default size card"
            extra={<EllipsisOutlined />}
            style={{ width: 400, padding: 0, margin: '90px 0 58px' }}
        >
            <Meta
                avatar={<Avatar src="https://taimienphi.vn/tmp/cf/aut/anh-gai-xinh-1.jpg" />}
                title="UserName"
                description="Time"
                style={{ padding: ' 24px' }}
            />

            <div>
                <Card bordered={false} style={{ padding: '0 24px 24px 24px ', textAlign: 'start' }}>
                    Barbatos có thể không phải là vị thần mạnh nhất trong các 'đồng nghiệp', nhưng về độ thủ đoạn thì
                    chắc phải đứng đầu trong 7 vị thần 🤣🤣. Tôi tự hỏi không biết Morax đã cho Barbatos ăn Thiên thạch
                    bao giờ chưa nhỉ, nhây như này mà chưa ăn quả Thiên thạch nào thì hơi phí 🤔🤔🤔"
                </Card>
                {/* <!-- Card img --> */}
                <Card
                    style={{ width: '100%', border: 'none' }}
                    cover={<img alt="example" src="https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-3.jpg" />}
                ></Card>

                <Card style={{ width: 399, border: 0 }} actions={[<ButtonHeart />, <Comment />, <Share />]}></Card>
            </div>
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
            <div>
                {/* <!-- Comment wrap START --> */}
                <ul className="list-comment">
                    <li className="comment-item">
                        {/* <!-- Comment item nested START --> */}
                        <div className="user-UserContent">
                            <Meta
                                avatar={<Avatar src="https://i.9mobi.vn/cf/Images/huy/2021/12/6/anh-gai-xinh-5.jpg" />}
                                title="UserName"
                            />
                            <div>
                                <Card bordered={false}>
                                    See resolved goodness felicity shy civility domestic had but Drawings offended yet
                                    answered Jennings perceive.
                                </Card>
                                <Card
                                    style={{ width: 350, border: 0 }}
                                    actions={[<ButtonHeart />, <Comment />, <div>Time</div>]}
                                ></Card>
                            </div>
                        </div>
                        {/* <!-- Load more replies --> */}
                        <div style={{ textAlign: 'start', marginLeft: '45px' }}>Load more replies</div>
                        {/* <!-- Comment item nested END --> */}
                    </li>
                    <div style={{ textAlign: 'start', margin: '20px 0' }}>Load more comments</div>
                </ul>
                {/* <!-- Comment wrap END --> */}
            </div>

            {/* <!-- Card footer END --> */}
        </Card>
    );
}

export default UserContent;
