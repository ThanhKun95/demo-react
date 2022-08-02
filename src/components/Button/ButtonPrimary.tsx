import { ReactNode } from 'react';
import './ButtonPrimary.scss';

interface Props {
    children?: ReactNode;
}
export default function ButtonPrimary({ children }: Props) {
    return <div className="primary-btn">{children}</div>;
}
