import React from 'react'
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChanelMessage, {Mention} from '../ChanelMessage'

const ChanelData: React.FC = () => {
    return(
        <Container>
            <Messages>
                <ChanelMessage 
                    author="Giovani Canova"
                    date="29/12/2021"
                    content="Hoje é feriado!"
                />
                

                <ChanelMessage 
                    author="Célia Canova"
                    date="29/12/2021"
                    content={
                        <>
                            <Mention>
                                @Giovani Canova
                            </Mention>, feliz aniversário!
                        </>
                    }
                    mentions
                    isBot
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
}

export default ChanelData