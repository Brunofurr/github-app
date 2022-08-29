import React from "react";
import { Organization } from "../../interfaces/organization";
import Avatar from "../avatar";
import Card from "../card";
import { OrganizationsContainer } from "./styles";

export interface OrganizationsProps {
    organizations: Organization[];
}

const Organizations = ({ organizations }: OrganizationsProps) => {

    return (
        <Card>
            <OrganizationsContainer>
                <div className="organizations">
                    <h3 className="organizations__title">Organizations</h3>
                    <div className="divider"></div>
                    <div className="organizations__row">
                        {organizations.map((organization: Organization) => <Avatar key={organization.id} url={organization.avatar_url} maxWidth={`33px`} />)}
                    </div>
                </div>
            </OrganizationsContainer>
        </Card>
    )
}

export default Organizations