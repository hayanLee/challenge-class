import React from 'react';

const styles = {
    wrapper:
        'shadow-lg bg-white p-6 border rounded-lg w-[320px] transition flex flex-col duration-500 text-sm !translate-x-0',
    title: 'font-semibold',
};

function Toast() {
    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>Scheduled: Catch up</h6>
            <p>Friday, February 10, 2023 at 5:57 PM</p>
        </div>
    );
}

export default Toast;
