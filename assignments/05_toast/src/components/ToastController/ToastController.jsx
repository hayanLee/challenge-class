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
                <Input type='text' label='제목 (필수)' value={1} />
                <Input type='text' label='내용 (필수)' value={2} />
                <Input type='number' label='노출 시간(ms) (선택)' value={3} />
            </div>
            <button className={styles.button}>토스를 띄우기</button>
        </div>
    );
}
