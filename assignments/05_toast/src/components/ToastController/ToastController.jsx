import React from 'react';
import Input from '../common/Input';

const styles = {
    wrapper: 'w-[320px] flex flex-col gap-y-6',
    title: 'text-2xl font-semibold text-center',
    inputContainer: 'flex flex-col gap-y-4',
    button: 'bg-black text-white py-3 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70',
};

export default function ToastController() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>토스트 컨트롤러</h1>
            <div className={styles.inputContainer}>
                <Input
                    type='text'
                    label='제목 (필수)'
                    defaultValue='Scheduled: Catch up'
                />
                <Input
                    type='text'
                    label='내용 (필수)'
                    defaultValue='Friday, February 10, 2023 at 5:57 PM'
                />
                <Input type='number' label='노출 시간(ms) (선택)' defaultValue={2000} />
            </div>
            <button className={styles.button}>토스를 띄우기</button>
        </div>
    );
}
