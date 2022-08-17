import styled from 'styled-components';

/** 
- Layout
- MH = Main Header
- AS = Aside
- CT = Content
*/

export const Grid  = styled.div`
    display: grid;
    grid-template-columns: 250px auto; /* 1° 2°*/
    grid-template-rows: 70px auto; /* 1° 2°*/

    grid-template-areas: 
    'AS MH'
    'AS CT';

    height: 100vh;
`;