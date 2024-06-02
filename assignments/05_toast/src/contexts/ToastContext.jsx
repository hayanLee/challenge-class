import { createContext, useState } from 'react';

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]); // 저장된 토스트들
    const value = {
        toasts,
        addToast: ({ title, content, time }) => {
            const id = crypto.randomUUID();
            setToasts([...toasts, { id, title, content, time }]);
            setTimeout(() => {
                setToasts((prev) => prev.filter((toast) => toast.id !== id));
            }, time);
        },
    };
    return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
};
