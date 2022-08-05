import { ReactNode } from 'react';
import './Button.scss';

interface Props {
    children?: ReactNode;
}
function GlassButton({ children }: Props) {
    return (
        <div className="glass">
            <button className="btn3">{children}</button>
        </div>
    );
}

export default GlassButton;
