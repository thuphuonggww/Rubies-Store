import axios from "axios";
import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtName: "",
      txtPhone: "",
      txtEmail: "",
    };
  }

  render() {
    return (
      <div className="signup-container">
        <div className="signup-box">
          <h2 className="signup-title">SIGN-UP</h2>
          <form>
            <table className="signup-form">
              <tbody>
                <tr>
                  <td>Username</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.txtUsername}
                      onChange={(e) => {
                        this.setState({ txtUsername: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Password</td>
                  <td>
                    <input
                      type="password"
                      value={this.state.txtPassword}
                      onChange={(e) => {
                        this.setState({ txtPassword: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>
                    <input
                      type="text"
                      value={this.state.txtName}
                      onChange={(e) => {
                        this.setState({ txtName: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>
                    <input
                      type="tel"
                      value={this.state.txtPhone}
                      onChange={(e) => {
                        this.setState({ txtPhone: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>
                    <input
                      type="email"
                      value={this.state.txtEmail}
                      onChange={(e) => {
                        this.setState({ txtEmail: e.target.value });
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <input
                      type="submit"
                      value="SIGN-UP"
                      onClick={(e) => this.btnSignupClick(e)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }

  // event-handlers
  btnSignupClick(e) {
    e.preventDefault();
    const { txtUsername, txtPassword, txtName, txtPhone, txtEmail } =
      this.state;
    if (txtUsername && txtPassword && txtName && txtPhone && txtEmail) {
      const account = {
        username: txtUsername,
        password: txtPassword,
        name: txtName,
        phone: txtPhone,
        email: txtEmail,
      };
      this.apiSignup(account);
    } else {
      alert("Please input all fields");
    }
  }

  // apis
  apiSignup(account) {
    axios.post("/api/customer/signup", account).then((res) => {
      const result = res.data;
      alert(result.message);
    });
  }
}

export default Signup;
