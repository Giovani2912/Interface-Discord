import React from 'react'
import { Container, Separetor } from './styles'
import ServerButton from '../ServerButton'
const ServerList: React.FC = () => {
    return(
        <Container>
            <ServerButton isHome/>
            <Separetor />
            <ServerButton />
            <ServerButton hasNotify/>
            <ServerButton hasMentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />

        </Container>
    );  
}

export default ServerList;