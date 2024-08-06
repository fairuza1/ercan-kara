import { activateUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import { Spinner } from "@/shared/components/Spinner";
import { useRouteParamApiRequest } from "@/shared/components/hooks/useRouteParamApiRequest";

export function Activation() {
  const { apiProgress, data, error } = useRouteParamApiRequest(
    "token",
    activateUser
  );
  // const { token } = useParams();
  // const [apiProgress, setApiProgress] = useState();
  // const [successMessage, setSuccessMessage] = useState();
  // const [errorMessage, setErrorMessage] = useState();

  // useEffect(() => {
  //   async function activate() {
  //     setApiProgress(true);
  //     try {
  //       const response = await activateUser(token);
  //       setSuccessMessage(response.data.message);
  //     } catch (axiosError) {
  //       setErrorMessage(axiosError.response.data.message);
  //     } finally {
  //       setApiProgress(false);
  //     }
  //   }

  //   activate();
  // }, [
  //   token, //buraya bu eklendiği zaman bu sefer invalid activation token demeyecek
  // ]);

  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner />
        </Alert>
      )}
      {data?.message && <Alert>{data.message}</Alert>}
      {error && <Alert styleType="danger"> {error}</Alert>}
    </>
  );
}
