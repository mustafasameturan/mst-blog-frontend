import PropTypes from "prop-types";

export default function Header({ title }) {
    return <h3 className="font-semibold text-[22px] mb-4">{title}</h3>
}

Header.propTypes = {
    title: PropTypes.string,
}