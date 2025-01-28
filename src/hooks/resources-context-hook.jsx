import { useContext } from "react";
import { ResourcesContext } from "../context/resources-context";
export const useResourcesContext = () => useContext(ResourcesContext);