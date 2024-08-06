import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useRouteParamApiRequest(param, httpFunction){

    const params = useParams();

    const pathParam = params[param];//id,token

    const [apiProgress, setApiProgress] = useState();
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
      async function sendRequest() {
        setApiProgress(true);
        try {
          const response = await httpFunction(pathParam);
          setData(response.data);
        } catch (axiosError) {
          setError(axiosError.response.data.message);
        } finally {
          setApiProgress(false);
        }
      }

      sendRequest();
    }, [pathParam]); //her iki sayfada da farklılaşan değerleri burada ortak bir sayfaya aldım.

    return { apiProgress, data, error };

}