import React, { useEffect, useState } from "react";
import { FaCodeBranch, FaPlusSquare, FaUserFriends } from "react-icons/fa";
import { Repository } from "../../interfaces/repository";
import Card from "../card";
import HighlightInfo from "../highlight-info";
import { RepositoriesContainer } from "./styles";

export interface RepositoriesProps {
    repositories: Repository[];
}

const Repositories = ({ repositories }: RepositoriesProps) => {

    const fillRepositories = (repos: Repository[]) => {
        return showMore ? repos : repos.slice(0, 10);
    }

    const [ showMore, setShowMore ] = useState<boolean>(false);
    const [ filteredRepos, setFilteredRepos ] = useState<Repository[]>(fillRepositories(repositories));

    useEffect(() => {
        setFilteredRepos(showMore ? repositories : repositories.slice(0, 10));
    }, [showMore])

    useEffect(() => {
        setFilteredRepos(fillRepositories(repositories))
    }, [repositories])

    const handleShowMore = (): void => {
        setShowMore(!showMore);
    } 

    return (
        <Card>
            <RepositoriesContainer>
                <div className="repositories">
                    <h3 className="repositories__title">Repositories</h3>
                    <div className="divider"></div>
                    <div className="repositories__row">
                        { filteredRepos.map((repository: Repository) => {
                            return (
                                <a key={repository.id} href={repository?.html_url} title={repository?.full_name} target="_blank">{<HighlightInfo label={repository?.full_name} icon={<FaCodeBranch />} fontSize={'14px'} />}</a>
                            )
                        }) }
                    </div>
                    <div className="repositories__actions">
                        {(repositories.length > 10) && <button type="button" className="repositories__actions--more" onClick={handleShowMore}>{<HighlightInfo label={`MOSTRAR ${showMore ? 'MENOS' : 'MAIS'}`} fontWeight={'600'} fontSize={'12px'} />}</button>}
                        <a href="https://github.com/new" title="Adicionar novo repositório" target="_blank" className="repositories__actions--add">{<HighlightInfo label={'NOVO'} icon={<FaPlusSquare />} fontWeight={'600'} fontSize={'12px'} />}</a>
                    </div>
                </div>
            </RepositoriesContainer>
        </Card>
    )
}

export default Repositories