import React from 'react'
import { Container, Title, ExpandIcon } from '../ServerName/styles';

const ServerName: React.FC = () => {
    return(
        <Container>
          <Title>Servidor primário</Title>
          <ExpandIcon />
        </Container>
    );
}

export default ServerName