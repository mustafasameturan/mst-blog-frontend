import PropTypes from "prop-types";
import classNames from "classnames";

export default function Badge({index, title}){

    const staticClassnames = [
        'bg-green-light text-green',
        'bg-grey-light text-blue-dark',
        'bg-yellow-light text-yellow-dark',
        'bg-blue-light text-blue'
    ]

    const getRandomItem = (items) => {
        return items[Math.floor(Math.random()*items.length)];
    }


    return (
        <span className={classNames("mb-4 inline-block rounded-full px-2 py-1 font-body text-sm", {
            "ml-4" : index !== 0,
            [getRandomItem(staticClassnames)] : !!staticClassnames
        })}>
            {title}
        </span>
    )
}

Badge.propTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
}