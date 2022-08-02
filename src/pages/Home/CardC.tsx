import { Avatar, Card, Skeleton } from 'antd';
import { ButtonHeart, Comment, Share } from '~/components/Button';
import './CardC.scss';

import React, { useState } from 'react';
const { Meta } = Card;

function CardC() {
    const [loading, setLoading] = useState(true);

    const onChange = (checked: boolean) => {
        setLoading(!checked);
    };

    return (
        <Card
            title="Default size card"
            extra={<a href="#">More</a>}
            style={{ width: 400, padding: 0, margin: '90px 0 58px' }}
        >
            <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="UserName"
                description="Time"
                style={{ padding: ' 24px' }}
            />

            <div>
                <Card bordered={false} style={{ padding: '0 24px 24px 24px' }}>
                    Barbatos có thể không phải là vị thần mạnh nhất trong các 'đồng nghiệp', nhưng về độ thủ đoạn thì
                    chắc phải đứng đầu trong 7 vị thần 🤣🤣. Tôi tự hỏi không biết Morax đã cho Barbatos ăn Thiên thạch
                    bao giờ chưa nhỉ, nhây như này mà chưa ăn quả Thiên thạch nào thì hơi phí 🤔🤔🤔" description="This
                    is the description
                </Card>
                {/* <!-- Card img --> */}
                <Card
                    style={{ width: '100%', border: 'none' }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                ></Card>

                <Card style={{ width: 399, border: 0 }} actions={[<ButtonHeart />, <Comment />, <Share />]}></Card>

                {/* <!-- Comment wrap START --> */}
                <ul className="list-comment">
                    <li className="comment-item">
                        {/* <!-- Comment item nested START --> */}
                        <div className="user-content">
                            <Meta avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />} title="UserName" />
                            <div>
                                <Card bordered={false}>
                                    See resolved goodness felicity shy civility domestic had but Drawings offended yet
                                    answered Jennings perceive.
                                </Card>
                                <Card
                                    style={{ width: 200, border: 0 }}
                                    actions={[<ButtonHeart />, <Comment />, <div>Time</div>]}
                                ></Card>
                            </div>
                        </div>
                        {/* <!-- Load more replies --> */}
                        <div>Load more replies</div>
                        {/* <!-- Comment item nested END --> */}
                    </li>
                </ul>
                {/* <!-- Comment wrap END --> */}
            </div>

            <div className="card-footer border-0 pt-0">
                {/* <!-- Load more comments --> */}
                <div>Load more comments</div>
            </div>
            {/* <!-- Card footer END --> */}
        </Card>
    );
}

export default CardC;
