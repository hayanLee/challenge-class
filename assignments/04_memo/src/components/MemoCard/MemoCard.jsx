import React from 'react';
import styled from 'styled-components';

const StCard = styled.div`
    width: 100%;
    height: 56px;
    background-color: var(--point-color);
    border-radius: 4px;
    padding: 12px 24px;
    cursor: pointer;
`;
const StTitle = styled.h6`
    margin: 0 0 2px;
    font-size: 13px;
    font-weight: 700;
`;
const StContent = styled.time`
    font-size: 12px;
    color: var(--text);
`;

export default function MemoCard() {
    return (
        <StCard>
            <StTitle>새로운 메모</StTitle>
            <StContent>오후 12:12</StContent>
        </StCard>
    );
}
