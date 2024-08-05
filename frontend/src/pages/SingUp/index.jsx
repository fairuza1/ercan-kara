import { useEffect, useMemo, useState } from "react";
import { singUp } from "./api";
import { Input } from "../SingUp/components/input";
import { useTranslation } from "react-i18next";
import { Alert } from "@/shared/components/Alert";
import { Spinner } from "@/shared/components/Spinner";
export function SingUp() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();
  const [errors, setErrors] = useState({});
  const [generalError, setGeneralError] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    setErrors((lastErrors) => ({
      ...lastErrors,
      username: undefined,
    }));
  }, [username]);

  useEffect(() => {
    setErrors((lastErrors) => ({
      ...lastErrors,
      email: undefined,
    }));
  }, [email]);

  useEffect(() => {
    setErrors((lastErrors) => ({
      ...lastErrors,
      password: undefined,
    }));
  }, [password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage();
    setGeneralError();
    setApiProgress(true);

    try {
      const response = await singUp({
        username,
        email,
        password,
      });
      setSuccessMessage(response.data.message);
    } catch (axiosError) {
      if (axiosError.response?.data) {
        if (axiosError.response.data.status === 400) {
          setErrors(axiosError.response.data.validationErrors);
        } else {
          setGeneralError(axiosError.response.data.message);
        }
      } else {
        setGeneralError(t("genericError"));
      }
    } finally {
      setApiProgress(false);
    }
  };

  const passwordRepeatError = useMemo(() => {
    if (password && password !== passwordRepeat) {
      return t("passwordMismatch");
    }
    return "";
  }, [password, passwordRepeat]);

  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>{t("signUp")}</h1>
          </div>
          <div className="card-body">
            <Input
              id="username"
              label={t("username")}
              error={errors.username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Input
              id="email"
              label={t("email")}
              error={errors.email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              id="password"
              label={t("password")}
              error={errors.password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            />
            <Input
              id="passwordRepeat"
              label={t("passwordRepeat")}
              error={passwordRepeatError}
              onChange={(event) => setPasswordRepeat(event.target.value)}
              type="password"
            />
            {successMessage && <Alert>{successMessage}</Alert>}

            {generalError && <Alert styleType="danger">{generalError}</Alert>}
            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
              >
                {apiProgress && <Spinner sm={true} />}
                {t("signUp")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

//{
//   <div className="mb-3">
//  <label htmlFor="username" className="form-label">
//  Username
//</label>
//<input
//  id="username"
//className={
//errors.username ? "form-control is-invalid" : "form-control"
//}
//onChange={
//(event) => setUsername(event.target.value)
//       setErrors({});//burada ise editleme yaparken username olan boşluğu temizledi // bu birinci yöntem diğer bir hook daha var
//} //setUsername(event.target.value)} bu durumda username cannot ifadesi kalır formu editlemeye başlayıncada gitmez bunun için şimdi editlerken gitmesini sağlayacağız
///>
//<div className="invalid-feedback">{errors.username}</div>
//</div>
//}{" "}
/**
 *  <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
 */

{
  /* <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div> */
}
//* <div className="mb-3">
