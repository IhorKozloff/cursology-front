import styled from 'styled-components';
//Не хотелось в тайлвинд добавлять спейсинги
export const OveralProgressLine = styled.div<{ width: number }>`
    height: 100%;
    background-color: #158FFF;
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.width === 0 ? '0' : props.width + '%'}!important;
`;