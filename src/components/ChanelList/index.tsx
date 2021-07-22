import React from 'react'
import ChanelButton from '../ChanelButton';
import {
        Container,
        Category,
        AddCategoryIcon,
    } from './styles';



const ChanelList: React.FC = () => {
    return(
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon />
            </Category>

            <ChanelButton channelName="Java" />
            <ChanelButton channelName="Python" />
            <ChanelButton channelName="React" />
            <ChanelButton channelName="Javascript" />
            <ChanelButton channelName="C#" />
            <ChanelButton channelName="AWS" />

        </Container>
    );
}

export default ChanelList;