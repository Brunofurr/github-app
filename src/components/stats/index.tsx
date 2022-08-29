import React from "react";
import Card from "../card";
import { StatsContainer } from "./styles";

export interface StatsProps {
    public_repos: number | undefined;
    followers: number | undefined;
    following: number | undefined;
}

const Stats = ({ public_repos, followers, following }: StatsProps) => {
    return (
        <Card>
            <StatsContainer>
                <div className="stats">
                    {public_repos && <div className="stats__row stats__row--mb">
                        <h4>Stats</h4>
                        <p>{ public_repos }</p>
                    </div>}
                    {followers && <div className="stats__row stats__row--mb">
                        <h4>Followers</h4>
                        <p>{ followers }</p>
                    </div>}
                    {following && <div className="stats__row stats__row--mb">
                        <h4>Following</h4>
                        <p>{ following }</p>
                    </div>}
                </div>
            </StatsContainer>
        </Card>
    )
}

export default Stats