
import HomeIcon from "../../assets/home-icon.svg";
import UserImage from "../../assets/user.svg";
import JobsIcon from "../../assets/jobs-icon.svg";
import UserProfileIcon from "../../assets/user-profile-icon.svg";
import HistoryIcon from "../../assets/history-icon.svg";
import PaymentIcon from "../../assets/payment-icon.svg";
import ConfarmationIcon from "../../assets/confarmation-icon.svg";
import CopyIcon from "../../assets/copy-success.svg";
import SettingIcon from "../../assets/settings.svg";

function Sidebar({notOpen}) {
  
  return (
    <>
      <div
      className={notOpen? "d-none d-md-block" : "d-block d-md-block"}
      
      >
        <div className=" t-sidebar position-fixed"style={{
        height: "100vh",
      }}>
          <div className="t-user-details">
            <img src={UserImage} alt="user" />
            <p className="t-username mt-3">Asif Ekbal Shagor</p>
            <p
              className="t-user-id mt-2"
              style={{
                fontFamily: "Inter",
              }}
            >
              Tutor ID 21546
            </p>
          </div>
          <div className="t-line"></div>

          <div className="d-scroll">
            <div className="t-sidebar-item">
              <div className="t-logo-container">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={HomeIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Dashboard</p>
              </div>
            </div>
            <div className="t-sidebar-item">
              <div className="t-logo-container-gray">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={JobsIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Jobs</p>
              </div>
            </div>

            <div>
              <div className="t-sidebar-item">
                <div className="t-logo-container-gray">
                  <img
                    style={{
                      marginLeft: 1,
                    }}
                    src={UserProfileIcon}
                    alt="home-icon"
                  />
                  <a
                    className="t-sidebar-item-text t-link"
                    data-bs-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Tutor Profile
                  </a>
                </div>
              </div>

              <div className="collapse" id="collapseExample">
                <div>
                  <div className="t-collaps-item">
                    <p className="t-collaps-item-text">View Profile</p>
                  </div>
                  <div className="t-collaps-item">
                    <p className="t-collaps-item-text">Update Profile</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="t-sidebar-item">
              <div className="t-logo-container-gray">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={HistoryIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Tutoring History</p>
              </div>
            </div>
            <div className="t-sidebar-item">
              <div className="t-logo-container-gray">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={PaymentIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Payment</p>
              </div>
            </div>
            <div className="t-sidebar-item">
              <div className="t-logo-container-gray">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={ConfarmationIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Confarmetion Latter</p>
              </div>
            </div>
            <div className="t-sidebar-item">
              <div className="t-logo-container-gray">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={CopyIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Membership</p>
              </div>
            </div>
            <div className="t-sidebar-item">
              <div className="t-logo-container-gray">
                <img
                  style={{
                    marginLeft: 1,
                  }}
                  src={SettingIcon}
                  alt="home-icon"
                />
                <p className="t-sidebar-item-text">Settings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
