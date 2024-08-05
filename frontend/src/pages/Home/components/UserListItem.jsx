import defaultProfileImage from "@/assets/resim2.png";

export function UserListItem({ user }) {
  return (
    <li className="list-group-item list-group-item-action ">
      <img
        src={defaultProfileImage}
        width="30"
        className="img-fluid rounden-circle shadow-sm"
      />
      <span className="ms-2">{user.username}</span>
    </li>
  );
}
