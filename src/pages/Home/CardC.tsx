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
            style={{ width: 400, padding: 0, marginTop: '90px' }}
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

                {/* <!-- Add comment --> */}
                <div className="d-flex mb-3">
                    {/* <!-- Avatar --> */}
                    <div className="avatar avatar-xs me-2">
                        <a href="#!">
                            {' '}
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/12.jpg" alt="" />{' '}
                        </a>
                    </div>
                    {/* <!-- Comment box  --> */}
                    <form className="w-100">
                        <textarea
                            data-autoresize=""
                            className="form-control pe-4 bg-light"
                            rows={1}
                            placeholder="Add a comment..."
                        ></textarea>
                    </form>
                </div>
                {/* <!-- Comment wrap START --> */}
                <ul className="comment-wrap list-unstyled">
                    {/* <!-- Comment item START --> */}
                    <li className="comment-item">
                        <div className="d-flex position-relative">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-xs">
                                <a href="#!">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/avatar/05.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="ms-2">
                                {/* <!-- Comment by --> */}
                                <div className="bg-light rounded-start-top-0 p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1">
                                            {' '}
                                            <a href="#!"> Frances Guerrero </a>
                                        </h6>
                                        <small className="ms-2">5hr</small>
                                    </div>
                                    <p className="small mb-0">
                                        Removed demands expense account in outward tedious do. Particular way thoroughly
                                        unaffected projection.
                                    </p>
                                </div>
                                {/* <!-- Comment react --> */}
                                <ul className="nav nav-divider py-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {' '}
                                            Like (3)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {' '}
                                            Reply
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {' '}
                                            View 5 replies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- Comment item nested START --> */}
                        <ul className="comment-item-nested list-unstyled">
                            {/* <!-- Comment item START --> */}
                            <li className="comment-item">
                                <div className="d-flex">
                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-xs">
                                        <a href="#!">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src="assets/images/avatar/06.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    {/* <!-- Comment by --> */}
                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1">
                                                    {' '}
                                                    <a href="#!"> Lori Stevens </a>{' '}
                                                </h6>
                                                <small className="ms-2">2hr</small>
                                            </div>
                                            <p className="small mb-0">
                                                See resolved goodness felicity shy civility domestic had but Drawings
                                                offended yet answered Jennings perceive.
                                            </p>
                                        </div>
                                        {/* <!-- Comment react --> */}
                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!">
                                                    {' '}
                                                    Like (5)
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!">
                                                    {' '}
                                                    Reply
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* <!-- Comment item END --> */}
                            {/* <!-- Comment item START --> */}
                            <li className="comment-item">
                                <div className="d-flex">
                                    {/* <!-- Avatar --> */}
                                    <div className="avatar avatar-story avatar-xs">
                                        <a href="#!">
                                            <img
                                                className="avatar-img rounded-circle"
                                                src="assets/images/avatar/07.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    {/* <!-- Comment by --> */}
                                    <div className="ms-2">
                                        <div className="bg-light p-3 rounded">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="mb-1">
                                                    {' '}
                                                    <a href="#!"> Billy Vasquez </a>{' '}
                                                </h6>
                                                <small className="ms-2">15min</small>
                                            </div>
                                            <p className="small mb-0">Wishing calling is warrant settled was lucky.</p>
                                        </div>
                                        {/* <!-- Comment react --> */}
                                        <ul className="nav nav-divider py-2 small">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!">
                                                    {' '}
                                                    Like
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#!">
                                                    {' '}
                                                    Reply
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            {/* <!-- Comment item END --> */}
                        </ul>
                        {/* <!-- Load more replies --> */}
                        <a
                            href="#!"
                            role="button"
                            className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                            data-bs-toggle="button"
                            aria-pressed="true"
                        >
                            <div className="spinner-dots me-2">
                                <span className="spinner-dot"></span>
                                <span className="spinner-dot"></span>
                                <span className="spinner-dot"></span>
                            </div>
                            Load more replies
                        </a>
                        {/* <!-- Comment item nested END --> */}
                    </li>
                    {/* <!-- Comment item END --> */}
                    {/* <!-- Comment item START --> */}
                    <li className="comment-item">
                        <div className="d-flex">
                            {/* <!-- Avatar --> */}
                            <div className="avatar avatar-xs">
                                <a href="#!">
                                    <img
                                        className="avatar-img rounded-circle"
                                        src="assets/images/avatar/05.jpg"
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/* <!-- Comment by --> */}
                            <div className="ms-2">
                                <div className="bg-light p-3 rounded">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1">
                                            {' '}
                                            <a href="#!"> Frances Guerrero </a>{' '}
                                        </h6>
                                        <small className="ms-2">4min</small>
                                    </div>
                                    <p className="small mb-0">
                                        Removed demands expense account in outward tedious do. Particular way thoroughly
                                        unaffected projection.
                                    </p>
                                </div>
                                {/* <!-- Comment react --> */}
                                <ul className="nav nav-divider pt-2 small">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {' '}
                                            Like (1)
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {' '}
                                            Reply
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#!">
                                            {' '}
                                            View 6 replies
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* <!-- Comment item END --> */}
                </ul>
                {/* <!-- Comment wrap END --> */}
            </div>
            {/* <!-- Card body END --> */}
            {/* <!-- Card footer START --> */}
            <div className="card-footer border-0 pt-0">
                {/* <!-- Load more comments --> */}
                <a
                    href="#!"
                    role="button"
                    className="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center active"
                    data-bs-toggle="button"
                    aria-pressed="true"
                >
                    <div className="spinner-dots me-2">
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                    </div>
                    Load more comments
                </a>
            </div>
            {/* <!-- Card footer END --> */}
        </Card>
    );
}

export default CardC;
