import {useEffect, useState} from "react";
import {GetPostCategoryTypes} from "~/services/admin/post-service.js";

export default function usePostCategoryTypes() {

    const [postCategoryTypes, setPostCategoryTypes] = useState([]);

    useEffect(() => {
        GetPostCategoryTypes()
            .then(result => {
                if (result.statusCode === 200) {
                    let tmpResultData = [];

                    result.data.map((item) => {
                        tmpResultData.push({id: item.id, value: item.id.toString(), label: item.title})
                    })

                    setPostCategoryTypes(tmpResultData);
                }
            });
    }, []);

    return postCategoryTypes;
}