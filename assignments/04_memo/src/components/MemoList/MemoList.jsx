import React from 'react';
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

const test = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
];
export default function MemoList() {
    return (
        <StWrapper>
            {test.map((memo) => (
                <li key={memo.id}>
                    <MemoCard />
                </li>
            ))}
        </StWrapper>
    );
}
