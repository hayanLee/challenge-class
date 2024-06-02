import React, { useState } from 'react';
import useToast from '../../hooks/useToast';
import Input from '../common/Input';

const styles = {
    wrapper: 'w-[320px] flex flex-col gap-y-5',
    title: 'text-2xl font-semibold text-center',
    inputContainer: 'flex flex-col gap-y-4',
    button: 'bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70',
};

const initialValue = {
    title: 'Scheduled: Catch up',
    content: 'Friday, February 10, 2023 at 5:57 PM',
    time: 2000,
};

export default function ToastController() {
    const toasts = useToast();
    const [form, setForm] = useState(initialValue);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, content, time } = e.target;
        if (title.value.length === 0 || content.value.length === 0) {
            return alert('제목과 내용을 모두 입력해주세요');
        }
        const newToast = {
            title: title.value,
            content: content.value,
            time: time.value || 2000,
        };
        toasts.addToast(newToast);
    };
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>토스트 컨트롤러</h1>
            <form className={styles.inputContainer} onSubmit={handleSubmit}>
                <Input
                    name='title'
                    type='text'
                    label='제목 (필수)'
                    value={form.title}
                    onChange={handleChange}
                />
                <Input
                    name='content'
                    type='text'
                    label='내용 (필수)'
                    value={form.content}
                    onChange={handleChange}
                />
                <Input
                    name='time'
                    type='number'
                    label='노출 시간(ms) (선택)'
                    value={form.time}
                    onChange={handleChange}
                />
                <button className={styles.button}>토스를 띄우기</button>
            </form>
        </div>
    );
}
