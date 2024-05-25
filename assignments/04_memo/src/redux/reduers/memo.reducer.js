import { ADD_NEW_MEMO, CHANGE_MEMO, DELETE_MEMO, SELECT_MEMO } from '../actions';

const initalState = {
    selectedMemo: 0, // 현재 클릭된 메모
    memoList: [],
    currentMemo: { time: 'date', content: '' },
};

function memoReducer(prevState = initalState, action) {
    switch (action.type) {
        case SELECT_MEMO:
            return { ...prevState, memoList: [...prevState.memoList, action.payload] };
        case ADD_NEW_MEMO:
            return;
        case CHANGE_MEMO:
            return;
        case DELETE_MEMO:
            return;
        default:
            return prevState;
    }
}
export default memoReducer;
