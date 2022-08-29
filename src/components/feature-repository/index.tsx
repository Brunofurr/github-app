import React from "react";
import { FaCircle, FaStar } from "react-icons/fa";
import { RepositoryItem } from "../../interfaces/repositoryResult";
import Avatar from "../avatar";
import Card from "../card";
import HighlightInfo from "../highlight-info";
import { FeatureRepositoryContainer } from "./styles";

export interface FeatureRepositoryProps {
    repositoryItem: RepositoryItem
}

const FeatureRepository = ({ repositoryItem }: FeatureRepositoryProps) => {

    return (
        <FeatureRepositoryContainer>
            <Card>
                <div className="feature__content">
                    <div className="feature__content__main">
                        <p className="info">Based on repositories you`ve viewed</p>
                        <div className="star">
                            <HighlightInfo label='STAR' fontSize='.75rem' fontWeight='bold' icon={<FaStar />} />
                        </div>
                    </div>

                    <div className="feature__user">
                        <Avatar url={ repositoryItem.owner.avatar_url } maxWidth="44px" />
                        <div className="feature__user__info">
                            <h4>{ repositoryItem.full_name }</h4>
                            <p>{ repositoryItem.description }</p>
                        </div>
                    </div>
                    
                    <div className="feature__content__status">
                        <div className="highlight">
                            <HighlightInfo label='C#' fontSize='.75rem' icon={<FaCircle color='darkgreen' />} />
                        </div>
                        <div className="highlight">
                            <HighlightInfo label='13k' fontSize='.75rem' icon={<FaStar />} />
                        </div>
                        <div className="highlight">
                            <HighlightInfo label='Updated a day ago' fontSize='.75rem' />
                        </div>
                    </div>
                </div>
            </Card>
        </FeatureRepositoryContainer>
    )
}

export default FeatureRepository