import { useEffect } from "react";
import { useResourcesContext } from "./resources-context-hook";

const useTitle = (title) => {
  const { HomePageTitle } = useResourcesContext();

    useEffect(() => {
        document.title = title ? `${HomePageTitle} | ${title}` : HomePageTitle;
    }, [title, HomePageTitle]);
}

export default useTitle;