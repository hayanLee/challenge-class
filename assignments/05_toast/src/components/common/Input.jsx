import React, { useId } from 'react';

const styles = {
    wrapper: 'flex flex-col gap-y-1.5',
    label: 'text-sm font-medium',
    input: 'border px-4 py-2.5 rounded-md w-80',
};

export default function Input({ label, type, defaultValue }) {
    const id = useId();
    return (
        <div className={styles.wrapper}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input id={id} type={type} className={styles.input} value={defaultValue} />
        </div>
    );
}
