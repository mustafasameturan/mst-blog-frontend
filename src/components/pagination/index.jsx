import ReactPaginate from "react-paginate";
import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";

export default function Pagination({ count, range, setCurrentPage }){

    const { t } = useTranslation();

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return(
        <ReactPaginate
            className="pagination"
            breakLabel="..."
            nextLabel={t("pagination.next")}
            pageRangeDisplayed={range}
            pageCount={count}
            previousLabel={t("pagination.back")}
            onPageChange={handlePageChange}
            renderOnZeroPageCount={null}
        />
    )
}

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    range: PropTypes.number,
    setCurrentPage: PropTypes.func
}