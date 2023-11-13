import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

export default function Pagination({ count, range }){

    const { t } = useTranslation();

    return(
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel={t("pagination.next")}
            pageRangeDisplayed={range}
            pageCount={count}
            previousLabel={t("pagination.back")}
            renderOnZeroPageCount={null}
        />
    )
}

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    range: PropTypes.number
}