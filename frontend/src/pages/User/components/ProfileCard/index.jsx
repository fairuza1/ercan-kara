import defaultProfileImage from "@/assets/resim2.png";
import { Button } from "@/shared/components/Button";
import { useAuthState } from "@/shared/state/context";

export function ProfileCard({ user }) {
  const authState = useAuthState();
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
        {authState.id === user.id && <Button>edit</Button>}
      </div>
    </div>
  );
}
