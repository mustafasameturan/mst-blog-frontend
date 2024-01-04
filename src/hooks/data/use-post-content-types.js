import {useEffect, useState} from "react";
import {GetPostContentTypes} from "~/services/admin/post-service.js";

export default function usePostContentTypes() {

    const [postContentTypes, setPostContentTypes] = useState([]);

    useEffect(() => {
        GetPostContentTypes()
            .then(result => {
                if(result.statusCode === 200)
                    setPostContentTypes(postContentTypes => result.data);
            });
    }, []);

    return postContentTypes;
}