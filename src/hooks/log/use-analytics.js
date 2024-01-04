import {FirebaseContext} from "~/providers/firebase-provider/index.jsx";
import { getAnalytics, logEvent } from "firebase/analytics";
import {useContext} from "react";

export default function useAnalytics(){

    const firebase = useContext(FirebaseContext);

    const analytics = getAnalytics(firebase);

    const useAnalytics = (event, param) => {
        logEvent(analytics, event, param);
    };

    return { useAnalytics };
}