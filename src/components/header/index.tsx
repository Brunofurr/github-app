import React, { useContext, useState } from 'react';
import { HeaderContainer, NavContainer } from './styles';
import NavLink from '../nav-link';
import { FaBell, FaChevronDown, FaGithub, FaPlusSquare } from "react-icons/fa";
import { LinkItem } from '../../interfaces/linkItem';
import SearchBar from '../search-bar';
import { getSearchUser } from '../../services/users';
import { UserContext } from '../../contexts/userContext';
import Avatar from '../avatar';


const Header = () => {
	const { setIsLoading, setUserResult, user } = useContext(UserContext);

	const [ links ] = useState<LinkItem[]>([
		{ hasSlash: true, label: 'Pull Request', identifier: 'pullRequest' },
		{ hasSlash: true, label: 'Issues', identifier: 'issues' },
		{ hasSlash: true, label: 'Marketplace', identifier: 'marketplace'  },
		{ hasSlash: true, label: 'Explore', identifier: 'explore'  },
	]);

	const [ status ] = useState<LinkItem[]>([
		{ hasSlash: true, icon: <FaBell />, identifier: 'alert' },
		{ hasSlash: true, icon: <FaPlusSquare />, identifier: 'addNew' },
	]);

	const handleSearch = async (query: string) => {
		setIsLoading(true);
		const searchedUser = await getSearchUser(query)
		.catch((err) => {
			setIsLoading(false);
			console.log('searchedUser err: ', err);
		})
		.finally(() => setIsLoading(false))

		if (searchedUser) {
			setUserResult(searchedUser?.data);
		}
	}

	return (
		<HeaderContainer>
			<NavContainer>
				<FaGithub className='icon' />
				<NavLink links={links}  />
				<SearchBar sendQuery={handleSearch} />
			</NavContainer>
			<NavContainer>
				<NavLink links={status}  />
				<Avatar maxWidth='18px' url={user?.avatar_url} />
				<div className='chevron'>
					<FaChevronDown size={'.65rem'} />
				</div>
			</NavContainer>
		</HeaderContainer>
	)
}

export default Header;

