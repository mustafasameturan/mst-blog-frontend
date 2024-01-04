import {createContext} from "react";
import { initializeApp } from "firebase/app";
import PropTypes from "prop-types";

const FirebaseContext = createContext(null);
export { FirebaseContext }

export default function FirebaseProvider({children}){
    const firebaseConfig = {
        apiKey: "AIzaSyAaOHXM5Co3yynafLv13yw5CHYKDHnr7NM",
        authDomain: "mst-blog.firebaseapp.com",
        projectId: "mst-blog",
        storageBucket: "mst-blog.appspot.com",
        messagingSenderId: "1017745078396",
        appId: "1:1017745078396:web:f4221c63d599679fcff1f9",
        measurementId: "G-HB6ZSMNNBN"
    };

    const firebase = initializeApp(firebaseConfig);

    return (
        <FirebaseContext.Provider value={firebase}>
            {children}
        </FirebaseContext.Provider>
    )
}

FirebaseProvider.propTypes = {
    children: PropTypes.any,
}