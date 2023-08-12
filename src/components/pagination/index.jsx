import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";

export default function Pagination({ count, range }){
    return(
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel="Next"
            pageRangeDisplayed={range}
            pageCount={count}
            previousLabel="Back"
            renderOnZeroPageCount={null}
        />
    )
}

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    range: PropTypes.number
}