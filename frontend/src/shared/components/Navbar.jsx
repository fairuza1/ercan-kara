import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "@/assets/resim1.jpg";

import { useAuthDispatch, useAuthState } from "../state/context";

export function Navbar() {
  const { t } = useTranslation();
  const authState = useAuthState();
  const dispatch = useAuthDispatch();

  const onClickLogout = () => {
    dispatch({ type: "logout-success" });
  };

  return (
    <nav className="navbar navbar-expand bg-body-tertiary shadow-sm">
      <div className="container-fluid d-flex align-items-center">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} width={80} alt="Logo" />
          <div
            style={{
              fontSize: "50px",
              fontWeight: "500",
              marginLeft: "10px",
            }}
          >
            ERKA
          </div>
        </Link>
        <ul className="navbar-nav">
          {authState.id === 0 && (
            <>
              <li className="nav-item">
                <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                  <Link className="nav-link" to="/Login">
                    {t("login")}
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                  <Link className="nav-link" to="/signup">
                    {t("signUp")}
                  </Link>
                </div>
              </li>
            </>
          )}
          {authState.id > 0 && (
            <>
              <li className="nav-item">
                <div style={{ fontSize: "24px", fontWeight: "bold" }}>
                  <Link className="nav-link" to={`/user/${authState.id}`}>
                    My Profile
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link"
                  role="button"
                  onClick={onClickLogout}
                  style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                  Logout
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
