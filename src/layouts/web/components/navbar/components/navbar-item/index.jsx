import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

export default function NavbarItem(props) {

    const { title, path } = props;

    return (
        <li className="group relative mr-6 mb-1">
            <NavLink
                to={path}
                className={({ isActive }) =>
                    classNames("relative z-30 block px-2 font-body text-lg font-medium transition-colors dark:group-hover:text-secondary group-hover:text-green", {
                        "text-green dark:text-green" : isActive,
                        "dark:text-white": !isActive
                    })
                }
             >
                {({isActive}) => (
                    <>
                        {title}
                        {isActive && (<div className="absolute left-0 bottom-0 z-20 w-full opacity-75 transition-all h-1 bg-yellow"></div>)}
                    </>
                )}
            </NavLink>
        </li>
    )
}

NavbarItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}