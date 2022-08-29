import React, { useContext } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaUserFriends } from 'react-icons/fa';
import { UserContext } from '../../contexts/userContext';
import Avatar from '../avatar';
import HighlightInfo from '../highlight-info';
import Organizations from '../organizations';
import Repositories from '../repositories';
import Stats from '../stats';
import { SideContentContainer } from './styles';

const SideContent = () => {

    const { user, organization, repository } = useContext(UserContext);

    return (
        <SideContentContainer>
            <Avatar url={user?.avatar_url} hasBorder={true} />
            <h3>{user?.name}</h3>
            <p>{user?.login}</p>
            <div className="divider"></div>
            <p>{user?.company && <HighlightInfo label={user?.company} icon={<FaUserFriends color="var(--color-highlight)" />} />}</p>
            <p>{user?.location && <HighlightInfo label={user?.location} icon={<FaMapMarkerAlt color="var(--color-highlight)" />} />}</p>
            <p>{user?.email && <HighlightInfo label={user?.email} icon={<FaEnvelope color="var(--color-highlight)" />} />}</p>

            <Stats followers={user?.followers} following={user?.following} public_repos={user?.public_repos} />

            { !!repository.length && <Repositories repositories={repository} />}

            { !!organization.length && <Organizations organizations={organization}/>}

        </SideContentContainer>
    )
}

export default SideContent