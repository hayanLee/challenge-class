import React from 'react';
import useToast from '../../hooks/useToast';
import Toast from './Toast';
const styles = {
    wrapper: 'h-screen fixed flex flex-col justify-end bottom-6 right-6 gap-y-3',
};

function ToastsContainer() {
    const { toasts } = useToast();
    return (
        <div className={styles.wrapper}>
            {toasts.map(({ id, title, content, time }) => (
                <Toast key={id} id={id} title={title} content={content} time={time} />
            ))}
        </div>
    );
}

export default ToastsContainer;
