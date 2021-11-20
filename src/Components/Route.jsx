import { useState, useEffect } from "react";

function Route(props) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange)
        }
        
    }, [])

    return currentPath === props.path ? props.children : null;
};

export default Route;