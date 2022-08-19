import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

interface Props {
    children?: ReactNode;
    to?: any;
}
export default function ButtonPrimary({ children, to }: Props) {
    const Tag = to ? NavLink : 'div';

    return (
        <Tag to={to} className="primary-btn">
            {children}
        </Tag>
    );
}
