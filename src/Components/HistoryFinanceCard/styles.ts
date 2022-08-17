import styled from "styled-components";

interface iTagProps{
    color: string;
}

export const Container = styled.li`
    background-color: ${props => props.theme.colors.tertiary};

    list-style: none;
    border-radius: 5px;

    margin: 10px 0;
    padding: 12px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
    transition: all .3s ease-in-out;

    position: relative;

    &:hover {
        opacity: .6;
        transform: translateX(10px);
    }

    > div {
        display: flex;
        flex-direction: column;
    }

    > div span {
        margin-left: 20px;
    }

    > div small {
        margin-left: 20px;
    }

`;

export const Tag = styled.div<iTagProps>`
    width: 10px;
    height: 60%;

    border-radius: 20px;

    position: absolute;
    left: 10px;

    background-color: ${props => props.color};
`;