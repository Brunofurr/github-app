import React from 'react';
import HeaderSwitch from '../header-switch';
import MainContent from '../main-content';
import SideContent from '../side-content';
import { DashboardContainer } from './styles';

const Dashboard = () => {

    return (
        <DashboardContainer>
            <HeaderSwitch />
            <div className="wrapper">
                <SideContent />
                <MainContent />
            </div>
        </DashboardContainer>
    )
}

export default Dashboard