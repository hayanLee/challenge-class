import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MemoCard from '../MemoCard/MemoCard';

const StWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
    padding: 20px 12px;
    gap: 8px;
    height: 100%;
`;

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
