import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { UserEvent } from "../../interfaces/userEvent";
import { getDateString } from "../../utils";
import Avatar from "../avatar";
import Card from "../card";
import HighlightInfo from "../highlight-info";
import { FeatureActivityContainer } from "./styles";

export interface FeatureActivityProps {
    userEvent: UserEvent
}

const FeatureActivity = ({ userEvent }: FeatureActivityProps) => {

    return (
        <FeatureActivityContainer>
            <div key={userEvent.id} className="feature">
                <div className="feature__header">
                    <Avatar url={userEvent.actor.avatar_url} maxWidth={'28px'} />
                    <p><b>{userEvent.actor.login}</b> {userEvent.type} <b>{userEvent.repo.name}</b> | em { getDateString(userEvent.created_at) }</p>
                </div>
                <div className="feature__wrapper">
                    <Card>
                        <div className="feature__content">
                            <div className="feature__content__main">
                                <h4>{userEvent.repo.name}</h4>
                                <div className="star">
                                    <HighlightInfo label='STAR' fontSize='.75rem' fontWeight='bold' icon={<FaStar />} />
                                </div>
                            </div>
                            <p>{userEvent.payload.description}</p>
                            <div className="feature__content__status">
                                <div className="highlight">
                                    <HighlightInfo label='Javascript' fontSize='.75rem' icon={<FaCircle color='gold' />} />
                                </div>
                                <div className="highlight">
                                    <HighlightInfo label='3.7k' fontSize='.75rem' icon={<FaStar />} />
                                </div>
                                <div className="highlight">
                                    <HighlightInfo label='2 issues need help' fontSize='.75rem' />
                                </div>
                                <div className="highlight">
                                    <HighlightInfo label='Updated May 23' fontSize='.75rem' />
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </FeatureActivityContainer>
    )
}

export default FeatureActivity