import React from 'react';
import styled from 'styled-components';
import MemoList from '../MemoList/MemoList';
const StWrapper = styled.div`
    min-height: 0;
`;

const StMemoHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--bg-color);
    border-right: 1px solid var(--border-color);
`;

const StButton = styled.button`
    font-size: 13px;
    font-weight: 500;
    color: var(--gray);
    padding: 4px 8px;
    background-color: var(--bg-color);
    border: none;
    cursor: pointer;
    &:hover {
        color: var(--accent-color);
    }
    transition: all 120ms ease 0s;
`;

export default function MemoListContainer() {
    return (
        <StWrapper>
            <StMemoHeader>
                <StButton>새 메모 작성하기</StButton>
                <StButton>삭제</StButton>
            </StMemoHeader>
            <MemoList />
        </StWrapper>
    );
}
