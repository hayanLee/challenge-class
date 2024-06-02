import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

const styles = {
    wrapper:
        'shadow-lg bg-white p-6 border rounded-lg w-[320px] transition flex flex-col text-sm duration-500',
    title: 'font-semibold',
};

export default function Toast({ title, content, time }) {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        setIsActive(true);
        setTimeout(() => {
            setIsActive(false);
        }, time - 500);
    }, []);

    return (
        <div
            className={clsx(styles.wrapper, {
                'translate-x-0': isActive,
                'translate-x-[calc(100%+24px)]': !isActive,
            })}
        >
            <h6 className={styles.title}>{title}</h6>
            <p>{content}</p>
        </div>
    );
}
