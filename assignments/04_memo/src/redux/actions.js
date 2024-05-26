import { v4 as uuidv4 } from 'uuid';
import { DateOptions, TimeOptions } from './reduers/memo.reducer';

export const SELECT_MEMO = 'SELECT_MEMO';
export const ADD_NEW_MEMO = 'ADD_NEW_MEMO';
export const CHANGE_MEMO = 'CHANGE_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';

export const selectedMemo = (memoId) => ({
    type: SELECT_MEMO,
    payload: memoId,
});

export const addNewMemo = () => ({
    type: ADD_NEW_MEMO,
    payload: {
        id: uuidv4(),
        date: new Date().toLocaleDateString('ko-KR', DateOptions),
        time: new Date().toLocaleTimeString('ko-KR', TimeOptions),
        content: '새로운 메모',
    },
});
export const changeMemo = (id, content) => ({
    type: CHANGE_MEMO,
    payload: { id, content },
});
export const deleteMemo = (id) => ({
    type: DELETE_MEMO,
    payload: id,
});
