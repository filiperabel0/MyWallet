import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

export const Filters = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    .tagfilter{
        font-size: 18px;
        font-weight: 500;
        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;

        transition: all .3s ease-in-out;

        &:hover{
           opacity : .5;
           transform: translateY(-5px);
        }
    }

        .tagfilter-recurrent::after{
            content: '';

            display: block;
            width: 40px;
            margin: 0 auto;

            border-bottom: 7px solid ${props => props.theme.colors.warning};
            border-radius: 10px;
        }

        .tagfilter-eventual::after{
            content: '';

            display: block;
            width: 40px;
            margin: 0 auto;

            border-bottom: 7px solid ${props => props.theme.colors.sucess};
            border-radius: 10px;
        }
`;