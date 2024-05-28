import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectedMemo } from '../../redux/actions';
import { StCard, StContent, StTitle } from './MemoCard.styled';

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
