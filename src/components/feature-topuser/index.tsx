import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import { User } from "../../interfaces/user";
import Avatar from "../avatar";
import Card from "../card";
import HighlightInfo from "../highlight-info";
import { FeatureTopuserContainer } from "./styles";

export interface FeatureTopuserProps {
    topuser: User
}

const FeatureTopuser = ({ topuser }: FeatureTopuserProps) => {

    return (
        <FeatureTopuserContainer>
            <Card>
                <div className="feature">
                    <Avatar url={topuser.avatar_url} maxWidth={'74px'} />
                    <div className="feature__content">
                        <h3 className="feature__content__title"><b>{topuser.login}</b> | username</h3>
                        <p>js code lover</p>
                        <div className="feature__content__highlights">
                            <div className="highlight">
                                <div className="bullet">39</div>
                                <p>repositories</p>
                            </div>
                            <div className="highlight">
                                <div className="bullet">90k</div>
                                <p>followers</p>
                            </div>
                            <div className="highlight">
                                <div className="bullet">338</div>
                                <p>following</p>
                            </div>
                        </div>
                    </div>
                    <div className="plus">
                        <HighlightInfo label='FOLLOW' fontSize='.75rem' fontWeight='bold' icon={<FaPlusSquare />} />
                    </div>
                </div>
            </Card>
        </FeatureTopuserContainer>
    )
}

export default FeatureTopuser