import React from 'react'
import { Container, Avatar, Message, Header, Content } from './styles';

export {Mention} from './styles'

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  mentions ?: boolean;
  isBot ?: boolean;
}

const ChanelMessage: React.FC<Props> = (
  {author,
  date,
  content,
  mentions,
  isBot}
) => {
    return(
        <Container className={mentions ? 'mention' : ''}>
            <Avatar className={isBot ? 'bot' : ''}/>

            <Message>
              <Header>
                <strong> {author} </strong>
                {isBot && <span>Bot</span>}
                <time> {date} </time> 
              </Header>
              
              <Content>
                {content}
              </Content> 
            </Message>
        </Container>
    );
}

export default ChanelMessage