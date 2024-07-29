import { useState } from "react";
import { singUp } from "./api";
//cross origin resource sharing hatasını incele
//<button disabled={password !== passwordRepeat}>Sing Up</button>
//password&& password !== passwordRepeat yani şifre yoksa veya şifre ler aynı değilse disable olsun anlamını verececek
//burada şifre ve tekrar girilen şifre eşit olursa buton aktif olsun dedik
//const [apiProgress, setApiProgress] = useState(false);
//bu kodda ise sign up tuşuna birden kez basarak aynı şeyi döndürmemeye yaradı ayrıca buton tuşuna da bu değeri atayarak yaptık
// apiProgress && <span
//className="spinner-border spinner-border-sm"
//aria-hidden="true"
//></span>} bu kodda ise apiProgress && yani doğru ise butonu çalıştır dönerek anlamını verecek

export function SingUp() {
  const [username, setUsername] = useState(); //bir değeri tutatbilme ve o değerdeki değişimlere componentennin reaksiyon göstermesine yarar
  const [email, setEmail] = useState();
  const [password, SetPassword] = useState();
  const [passwordRepeat, SetPasswordRepeat] = useState();
  const [apiProgress, setApiProgress] = useState(false);
  const [successMessage, setSuccessMessage] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();
    setSuccessMessage(); // bu kod ise kullanıcı oluşturulduğunda create yazısını gidermeye yarıyor
    setApiProgress(true);

    try {
      const response = await singUp({
        username,
        email,
        password,
        //keyler bunlar,proportyler
      });
      setSuccessMessage(response.data.message);
    } catch {
      /** */
    } finally {
      setApiProgress(false);
    }
  };
  //formm onSubmit işleminde mousla tıklamadan enter ile tıklanabilir
  return (
    <div className="container">
      <div className="col-lg-6 offset-lg-3 col-sm-8 offset-sm-2">
        <form className="card" onSubmit={onSubmit}>
          <div className="text-center card-header">
            <h1>Sing Up</h1>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                id="username"
                className="form-control"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                className="form-control"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="form-control"
                onChange={(event) => SetPassword(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordRepeat" className="form-label">
                {" "}
                Password Repeat
              </label>
              <input
                id="passwordRepeat"
                type="password"
                className="form-control"
                onChange={(event) => SetPasswordRepeat(event.target.value)}
              />
            </div>
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}

            <div className="text-center">
              <button
                className="btn btn-primary"
                disabled={
                  apiProgress || !password || password !== passwordRepeat
                }
              >
                {apiProgress && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
                Sing Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
