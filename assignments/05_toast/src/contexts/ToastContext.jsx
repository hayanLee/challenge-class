import { createContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([
        {
            id: 1,
            title: 'Scheduled: Catch up',
            content: 'Friday, February 10, 2023 at 5:57 PM',
            time: 2000,
        },
        {
            id: 2,
            title: 'hello world',
            content: 'Friday, February 10, 2023 at 5:57 PM',
            time: 2000,
        },
        {
            id: 3,
            title: 'ㅋㅋㅋ',
            content: 'Friday, February 10, 2023 at 5:57 PM',
            time: 2000,
        },
        {
            id: 4,
            title: '하얀',
            content: '안녕',
            time: 2000,
        },
    ]); // 저장된 토스트들
    const value = {
        toasts,
        addToast: ({ title, content, time = 2000 }) => {
            const id = crypto.randomUUID();
            setToasts([...toasts, { id, title, content, time }]);
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, time);
        },
    };
    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
