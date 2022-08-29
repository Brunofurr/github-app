import { AxiosError } from "axios";
import React, { useContext, useEffect } from "react";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import Header from "../components/header";
import { UserContext } from "../contexts/userContext";
import { getActivities, getSearchRepositories, getTopUsers, getUser, getUserOrganizations, getUserPublicEvents, getUserRepositories } from "../services/users";
import { HomeCountainer } from "./styles";

const Home = () => {

    const { 
        username,
        topUsersPerPage,
        repositoriesPerPage,
        activitiesPerPage,
        userEvent,
        repositoryResult,
        topuserResult,
        setUser,
        setOrganization,
        setRepository,
        setRepositoryResult,
        setUserEvent,
        setTopuserResult
    } = useContext(UserContext);

    useEffect(() => {
        const getUserInfo = async () => {
            const userResponse = await getUser(username).catch((err) => {
                console.log('getUser err: ', err);
            })

            if (userResponse) {
                setUser(userResponse.data);

                const [ orgResp, repoResp, repos, activities, topUsers ] = await Promise.all([
                    getUserOrganizations(username).catch((err: AxiosError) => {
                        console.log('getUserOrganizations err: ', err);
                    }),
                    getUserRepositories(username).catch((err: AxiosError) => {
                        console.log('getUserRepositories err: ', err);
                    }),
                    getSearchRepositories(repositoriesPerPage).catch((err: AxiosError) => {
                        console.log('getSearchRepositories err: ', err);
                    }),
                    getActivities(activitiesPerPage).catch((err: AxiosError) => {
                        console.log('getActivities err: ', err);
                    }),
                    getTopUsers(topUsersPerPage).catch((err: AxiosError) => {
                        console.log('getTopUSers err: ', err);
                    })
                ])

                if (orgResp) {
                    setOrganization(orgResp.data);
                }

                if (repoResp) {
                    setRepository(repoResp.data);
                }

                if (repos) {
                    setRepositoryResult(repos.data);
                }

                if (activities) {
                    setUserEvent(activities.data);
                }

                if (topUsers) {
                    setTopuserResult(topUsers.data);
                }
            }
        }

        getUserInfo();
    }, [ username ])

    useEffect(() => {

        const getActivitiesPerPage = async () => {
            if (!!userEvent.length) {
                const activities = await getActivities(activitiesPerPage).catch((err: AxiosError) => {
                    console.log('getActivities err: ', err);
                })

                if (activities) {
                    setUserEvent(activities.data);
                }
            }
        }

        getActivitiesPerPage();

    }, [activitiesPerPage])

    useEffect(() => {

        const getRepositoriesPerPage = async () => {
            if (!!repositoryResult) {
                const repos = await getSearchRepositories(repositoriesPerPage).catch((err: AxiosError) => {
                    console.log('getSearchRepositories err: ', err);
                })

                if (repos) {
                    setRepositoryResult(repos.data);
                }
            }
        }

        getRepositoriesPerPage();

    }, [repositoriesPerPage])

    useEffect(() => {

        const getTopusersPerPage = async () => {
            if (!!topuserResult) {
                const topUsers = await getTopUsers(topUsersPerPage).catch((err: AxiosError) => {
                    console.log('getTopUSers err: ', err);
                })
    
                if (topUsers) {
                    setTopuserResult(topUsers.data);
                }
            }
        }

        getTopusersPerPage()
    }, [topUsersPerPage])

    return (
        <HomeCountainer>
            <Header />
            <Dashboard />
            <Footer />
        </HomeCountainer>
    )
}

export default Home