import React, { useContext } from 'react';
import { FaCircle, FaStar } from 'react-icons/fa';
import { UserContext } from '../../contexts/userContext';
import { RepositoryItem } from '../../interfaces/repositoryResult';
import { User } from '../../interfaces/user';
import { UserEvent } from '../../interfaces/userEvent';
import ButtonLoadmore from '../button-loadmore';
import FeatureActivity from '../feature-activity';
import FeatureRepository from '../feature-repository';
import FeatureTopuser from '../feature-topuser';
import { MainContentContainer } from './styles';

const MainContent = () => {

    const { 
        activeSection,
        userEvent,
        repositoryResult,
        topuserResult,
        activitiesPerPage,
        setActivitiesPerPage,
        repositoriesPerPage,
        setRepositoriesPerPage,
        topUsersPerPage,
        setTopUsersPerPage
    } = useContext(UserContext);

    const handleLoadMore = (type: string) => {
        switch(type) {
            case 'activity': 
                setActivitiesPerPage(activitiesPerPage + 10);
                break;
            case 'repository':
                setRepositoriesPerPage(repositoriesPerPage + 10);
                break;
            case 'topusers':
                setTopUsersPerPage(topUsersPerPage + 10);
                break;
        }
    }

    const renderSectionSwitch = (status: number) => {
        switch (status) {
            case 0: return (
                <>
                    { userEvent.map((uEvent: UserEvent) => {
                        return (
                            <FeatureActivity key={uEvent.id} userEvent={uEvent} />
                        )
                    }) }
                    { !!userEvent.length && <ButtonLoadmore label={`Carregar mais`} type='activity' sendAction={handleLoadMore} /> }
                </>
            )
            case 1: return (
                <>
                    { repositoryResult?.items.map((repoResult: RepositoryItem) => {
                        return (
                            <FeatureRepository key={repoResult.id} repositoryItem={repoResult} />
                        ) 
                    })}
                    { !!repositoryResult?.items?.length && <ButtonLoadmore label={`Carregar mais`} type='repository' sendAction={handleLoadMore} /> }
                </>
            )
            case 2: return (
                <>
                    { topuserResult?.items.map((user: User) => {
                        return (
                            <FeatureTopuser key={user.id} topuser={user} />
                        )
                    })}
                    { !!topuserResult?.items?.length && <ButtonLoadmore label={`Carregar mais`} type='topusers' sendAction={handleLoadMore} /> }
                </>
            )
            default: return (
                <></>
            )
        }
    }

    return (
        <MainContentContainer>
            <div className="main-content">
                { renderSectionSwitch(activeSection) }
            </div>
        </MainContentContainer>
    )
}

export default MainContent