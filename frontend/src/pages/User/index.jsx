import { getUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import { useRouteParamApiRequest } from "@/shared/components/hooks/useRouteParamApiRequest";
import { Spinner } from "@/shared/components/Spinner";
import { ProfileCard } from "./components/ProfileCard";

export function User() {
  const {
    apiProgress,
    data: user,
    error,
  } = useRouteParamApiRequest("id", getUser);

  return (
    <>
      {apiProgress && (
        <Alert styleType="secondary" center>
          <Spinner />
        </Alert>
      )}
      {user && <ProfileCard user={user} />}
      {error && <Alert styleType="danger">{error}</Alert>}
    </>
  );
}

// const { id } = useParams();
// const [apiProgress, setApiProgress] = useState();
// const [user, setUser] = useState();
// const [errorMessage, setErrorMessage] = useState();

// useEffect(() => {
//   async function loadUser() {
//     setApiProgress(true);
//     try {
//       const response = await getUser(id);
//       setUser(response.data);
//     } catch (axiosError) {
//       setErrorMessage(axiosError.response.data.message);
//     } finally {
//       setApiProgress(false);
//     }
//   }

//   loadUser();
// }, [
//   id, //buraya bu eklendiği zaman bu sefer invalid activation token demeyecek
// ]);

///////////////////////////////////////////////////////////////////////////////////////////

// state = {
//   user: null,
//   apiProgres: false,
//   error: null,
// };

// loadUser = async () => {
//   this.setState({ apiProgres: true }); // gönderdiğimiz kadarını parçayı state güncelliyo   user ı silmiyor sadece apıprogeresi günceller bu
//   try {
//     const response = await getUser(this.props.id);
//     this.setState({
//       user: response.data,
//     });
//   } catch (axiosError) {
//     this.setState({
//       error: this.props.t("userNotFoundError"),
//     });
//   } finally {
//     this.setState({ apiProgres: false });
//   }
// };

// async componentDidMount() {
//   // bunu böyle tanımlamamızı sebebi api request atacagız get request
// }

// componentDidUpdate(previousProps, previousState) {
//   if (this.props.id !== previousProps.id) {
//     this.loadUser();
//   }
// }

// render() {
//   return (
//     <>
//       {this.state.user && <h1>{this.state.user.username}</h1>}
//       {this.state.apiProgress && (
//         <Alert styleType="secondary" center>
//           <Spinner />
//         </Alert>
//       )}
//       {this.state.error && (
//         <Alert styleType="danger"> {this.state.error}</Alert>
//       )}
//     </>
//   );
// }

// const UserPageWithTranslation = withTranslation()(UserClass);

// export function User() {
//   const { id } = useParams();
//   //  const { t } = useTranslation(); bu durumda olabilir kullanıcı bulunamadı yazıdrmaya
//   return <UserPageWithTranslation id={id} />; //t={t} bunu yazarsak
// }
