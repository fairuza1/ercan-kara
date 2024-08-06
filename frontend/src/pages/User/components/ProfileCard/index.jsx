import defaultProfileImage from "@/assets/resim2.png";

export function ProfileCard({ user }) {
  return (
    <div className="card">
      <div className="card-header text-center">
        <img
          src={defaultProfileImage}
          width="275"
          className="img-fluid rounden-circle shadow-sm"
        />
      </div>
      <div className="card-body text-center">
        <span className="fs-2">{user.username}</span>
      </div>
    </div>
  );
}
