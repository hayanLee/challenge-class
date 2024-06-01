import React from 'react';

const styles = {
    wrapper:
        'shadow-lg bg-white p-6 border rounded-lg w-[320px] transition flex flex-col duration-500 text-sm !translate-x-0',
    title: 'font-semibold',
};

export default function Toast({ id, title, content, time }) {
    // useEffect(() => {
    //     console.log('토스트 마운트');
    //     setTimeout(() => {
    //         console.log('시간 지남');
    //     }, time);
    // }, []);
    return (
        <div className={styles.wrapper}>
            <h6 className={styles.title}>{title}</h6>
            <p>{content}</p>
        </div>
    );
}
