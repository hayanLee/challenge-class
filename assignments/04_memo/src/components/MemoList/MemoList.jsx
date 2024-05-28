import React from 'react';
import { useSelector } from 'react-redux';
import MemoCard from '../MemoCard/MemoCard';
import { StWrapper } from './MemoList.styled';

export default function MemoList() {
    const memoList = useSelector((state) => state.memo.memoList);
    return (
        <StWrapper>
            {memoList.map((memo) => (
                <li key={memo.id}>
                    <MemoCard memo={memo} />
                </li>
            ))}
        </StWrapper>
    );
}
