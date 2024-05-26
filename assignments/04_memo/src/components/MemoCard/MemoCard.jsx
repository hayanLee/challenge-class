import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectedMemo } from '../../redux/actions';

const StCard = styled.div`
    width: 100%;
    height: 56px;
    background-color: ${(props) =>
        props.$isSelected ? 'var(--point-color)' : 'var(--bg-color)'};
    border-radius: 4px;
    padding: 12px 24px;
    cursor: pointer;
`;
const StTitle = styled.h6`
    margin: 0 0 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
const StContent = styled.time`
    font-size: 12px;
    color: var(--text);
`;

export default function MemoCard({ memo }) {
    const dispatch = useDispatch();
    const handleClick = () => dispatch(selectedMemo(memo.id));
    const selectedMemoId = useSelector((state) => state.memo.selectedMemo);
    const { time, content } = memo;

    const isSelected = selectedMemoId === memo.id;

    return (
        <StCard onClick={handleClick} $isSelected={isSelected}>
            <StTitle>{content}</StTitle>
            <StContent>{time}</StContent>
        </StCard>
    );
}
