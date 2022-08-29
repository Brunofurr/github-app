import React, { useState } from "react";
import { NavContainer } from "../header/styles";
import { FooterContainer } from "./styles";
import NavLink from '../nav-link';
import { LinkItem } from "../../interfaces/linkItem";
import { FaGithub } from "react-icons/fa";

const Footer = () => {

    const [ linksLeft ] = useState<LinkItem[]>([
		{ hasSlash: true, label: '2018 GitHub Inc.', identifier: 'githubinc' },
		{ hasSlash: false, label: 'Terms', identifier: 'terms' },
		{ hasSlash: false, label: 'Privacy', identifier: 'privacy'  },
		{ hasSlash: false, label: 'Security', identifier: 'security'  },
        { hasSlash: false, label: 'Status', identifier: 'status'  },
        { hasSlash: false, label: 'Help', identifier: 'help'  },
	]);

    const [ linksRight ] = useState<LinkItem[]>([
		{ hasSlash: false, label: 'Contact GitHub', identifier: 'contactgithub' },
		{ hasSlash: false, label: 'API', identifier: 'api' },
		{ hasSlash: false, label: 'Training', identifier: 'training'  },
		{ hasSlash: false, label: 'Shop', identifier: 'shop'  },
        { hasSlash: false, label: 'Blog', identifier: 'blog'  },
        { hasSlash: false, label: 'About', identifier: 'about'  },
	]);

    return (
        <FooterContainer>
            <NavContainer>
				<NavLink links={linksLeft}  />
            </NavContainer>
            <FaGithub fontSize={'32px'} />
            <NavContainer>
				<NavLink links={linksRight}  />
            </NavContainer>
        </FooterContainer>
    )
}

export default Footer