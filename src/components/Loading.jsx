import {useRouter} from "next/router";
import {useState, useEffect} from "react";
import LoadingPage from "./LoadingPage";


function Loading() {
    const router = useRouter();
    const [pageLoading, setPageLoading] = useState(false);
    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setPageLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setPageLoading(false);

        // routeChangesStart, routeChangeComplete, routeChangeError
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })

    return pageLoading && (
        <LoadingPage/>
    );
}

export default Loading;