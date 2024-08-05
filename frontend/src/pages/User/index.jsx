import { Component } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "./api";
import { Alert } from "@/shared/components/Alert";
import { Spinner } from "@/shared/components/Spinner";
import { AxiosError } from "axios";

export class UserClass extends Component {
  state = {
    user: null,
    apiProgres: false,
    error: null,
  };

  async componentDidMount() {
    // bunu böyle tanımlamamızı sebebi api request atacagız get request

    this.setState({ apiProgres: true }); // gönderdiğimiz kadarını parçayı state güncelliyo   user ı silmiyor sadece apıprogeresi günceller bu
    try {
      const response = await getUser(this.props.id);
      this.setState({
        user: response.data,
      });
    } catch (axiosError) {
      this.setState({
        error: axiosError.response.data.message,
      });
    } finally {
      this.setState({ apiProgres: false });
    }
  }

  render() {
    return (
      <>
        {this.state.user && <h1>{this.state.user.username}</h1>}
        {this.state.apiProgress && (
          <Alert styleType="secondary" center>
            <Spinner />
          </Alert>
        )}
        {this.state.error && (
          <Alert styleType="danger"> {this.state.error}</Alert>
        )}
      </>
    );
  }
}

export function User() {
  const { id } = useParams();
  return <UserClass id={id} />;
}
