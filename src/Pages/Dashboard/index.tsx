import React from "react";

import ContentHeader from "../../Components/ContentHeader";
import SelectInput from "../../Components/SelectInput";

import { Container } from "./style";

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Janeiro', label: 'a'},
        {value: 'a', label: 'a'},
        {value: 'a', label: 'a'}
    ];

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#e44c4e">
                <SelectInput options={options}/>
            </ContentHeader>
        </Container>
    );
}

export default Dashboard