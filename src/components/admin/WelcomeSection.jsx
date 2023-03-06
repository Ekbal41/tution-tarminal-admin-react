import React from "react";
import BoyWithLapto from "../../assets/boy-with-laptop.svg";
import ProfileIconWhite from "../../assets/profile-icon-white.svg";

function WelcomeSection() {
  return (
    <>
      <div className="row">
        <div className="col-md-8 t-d-welcome-section mb-4 mb-md-0 row">
          <div className="col-md-8">
            <h4 className="t-text-gray">
              <span className="mx-1">Hi, </span> Asif Ekbal Shagor
            </h4>
            <h1 className="t-text-gray-big fs-3 fs-md-0">Welcome to tution tarminal</h1>
            <div className="t-text-intro mt-4">
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.sit
                amet consectetur adipisicing elit. Praesentium, quidem!
                Voluptates in nam corporis accusamus, explicabo ex voluptatibus
                vitae dolorum!
              </p>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block">
            <img src={BoyWithLapto} alt="boy-with-laptop" />
          </div>
        </div>
        <div className="col-md-4 t-d-member ">
          <p className="mx-1" style={{
            fontSize: 18,
            fontWeight:400,
          }}>
            Member Since
          </p>
          <div className="t-date-box mx-auto  w-100">
            <div className="t-logo-container mx-3">
              <img
               
                style={{
                    marginLeft:-3,
                    marginTop:-2,
                }}
                src={ProfileIconWhite}
                alt="home-icon"
              />
              <p className="t-sidebar-item-text fs-5">12 Feb 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeSection;
