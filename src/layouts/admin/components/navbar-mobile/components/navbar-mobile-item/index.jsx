import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";

export default function NavbarMobileItem(props){

    const { path, title } = props;

    return (
        <li>
            <NavLink
                to={path}
                className="mb-3 block px-2 font-body text-lg font-medium text-white"
            >
                {title}
            </NavLink>
        </li>
    )
}

NavbarMobileItem.propTypes = {
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}