import { debounce } from 'lodash';
import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMemo } from '../../redux/actions';
import { StTextArea, StTimeStamp, StWrapper } from './MemoEditor.styled';

export default function MemoEditor() {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const selectedMemoId = useSelector((state) => state.memo.selectedMemo);
    const selectedMemo = useSelector((state) =>
        state.memo.memoList.find((memo) => memo.id === selectedMemoId)
    );

    console.log('렌더링', selectedMemoId, selectedMemo);
    // 디바운스 = 마지막 이벤트 종료 후 delay 지난 후 핸들러 발생
    // selectedMemoId에 따라 다시 핸들러를 만들기
    const debouncedHandleChange = useCallback(
        debounce(() => {
            const content = ref.current.value;
            dispatch(changeMemo(selectedMemoId, content));
        }, 300),
        [selectedMemoId]
    );

    useEffect(() => {
        ref.current.focus();
    }, [selectedMemoId]);

    useEffect(() => {
        if (ref.current) {
            ref.current.value =
                selectedMemo.content === '새로운 메모' ? '' : selectedMemo.content;
        }
    }, [selectedMemo]);

    return (
        <StWrapper>
            <StTimeStamp>
                {selectedMemo.date}, {selectedMemo.time}
            </StTimeStamp>
            <StTextArea
                ref={ref}
                defaultValue={ref.current?.value}
                onChange={debouncedHandleChange}
            />
        </StWrapper>
    );
}
