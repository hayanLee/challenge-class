import React from 'react';
import Toast from './Toast';

const styles = {
    wrapper: 'h-screen fixed flex flex-col justify-end bottom-6 right-6 gap-y-3',
};

function ToastWrapper() {
    return (
        <div className={styles.wrapper}>
            <Toast />
            <Toast />
            <Toast />
            <Toast />
            <Toast />
        </div>
    );
}

export default ToastWrapper;
