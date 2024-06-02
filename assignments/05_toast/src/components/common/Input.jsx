import React from 'react';

const styles = {
    wrapper: 'flex flex-col gap-y-1.5',
    label: 'text-sm font-medium',
    input: 'border px-4 py-2.5 rounded-md w-80',
};

export default function Input({ name, type, label, value, onChange }) {
    return (
        <div className={styles.wrapper}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>
            <input
                id={name}
                type={type}
                className={styles.input}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}
