import styled from 'styled-components';

export const StCard = styled.div`
    width: 100%;
    height: 56px;
    background-color: ${(props) => (props.$isSelected ? 'var(--point-color)' : 'var(--bg-color)')};
    border-radius: 4px;
    padding: 12px 24px;
    cursor: pointer;
`;
export const StTitle = styled.h6`
    margin: 0 0 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
`;
export const StContent = styled.time`
    font-size: 12px;
    color: var(--text);
`;
