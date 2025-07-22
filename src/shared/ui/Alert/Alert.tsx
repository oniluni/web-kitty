import type { AlertProps } from './types';

export const Alert: React.FC<AlertProps> = (props) => {
    const { message, type = 'info'} = props;
    return (
        <div className={`alert alert-${type}`}>
            {type === "success" && <span>✅</span>}
            {type === "error" && <span>❌</span>}
            {type === "info" && <span>ℹ️</span>}
            <span>{message}</span>
        </div>
    );
}