import React from 'react'
import { Button } from './styles'
import logoImg from '../../assets/logo.svg'

export interface Props {
    selected?: boolean;
    isHome?: boolean;
    hasNotify?: boolean;
    hasMentions?: number;
}

const ServerButton: React.FC<Props> = ({
    selected,
    isHome,
    hasNotify,
    hasMentions
}) => {
    return(
        <Button
        isHome={isHome}
        hasNotify={hasNotify}
        hasMentions={hasMentions}
        className={selected ? 'active' : ''}
        >
            {isHome && <img src={logoImg} title='' />}
        </Button>
    );
}

export default ServerButton;