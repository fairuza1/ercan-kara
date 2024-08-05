import { useCallback, useEffect, useState } from "react";
import { loadUsers } from "./api";
import { Spinner } from "@/shared/components/Spinner";
import { UserListItem } from "./UserListItem";

export function UserList() {
  const [userPage, setUserPage] = useState({
    content: [],
    last: false,
    first: true, // İlk sayfa başladığında "first" true olmalı
    number: 0,
  });
  const [apiProgress, setApiProgress] = useState(false);

  const getUsers = useCallback(async (page = 0) => {
    setApiProgress(true);
    try {
      const response = await loadUsers(page);
      setUserPage(response.data);
    } catch {
      // Hata işleme kısmını da ekleyebilirsiniz
    } finally {
      setApiProgress(false);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]); // getUsers bağımlılığı eklendi

  return (
    <div className="card">
      <div className="card-header text-center fs-4">User List</div>
      <ul className="list-group list-group-flush">
        {userPage.content.map((user) => (
          <UserListItem key={user.id} user={user} /> // Anahtar eklendi
        ))}
      </ul>
      <div className="card-footer text-center">
        {apiProgress && <Spinner />}
        {!apiProgress && !userPage.first && (
          <button
            className="btn btn-outline-secondary btn-sm float-start"
            onClick={() => getUsers(userPage.number - 1)}
          >
            Previous
          </button>
        )}
        {!apiProgress && !userPage.last && (
          <button
            className="btn btn-outline-secondary btn-sm float-end"
            onClick={() => getUsers(userPage.number + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
