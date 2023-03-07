import React from 'react'
import ProfileIcon from "../../assets/profile-icon.svg"
import RightArrow from "../../assets/right-arrow.svg"
import LocationIcon from "../../assets/Location.svg"
import SmsIcon from "../../assets/sms.svg"
import ArrowDown from "../../assets/arrow-down.svg"

function ProfileCard() {
  return (
    <> <div className="row mt-4 mt-md-0 mx-auto">
   
    <div
      className="t-d-md-card position-relative ml-cut-4 col-md-5 margin-right col-12 mb-4 mb-md-0"
    >
      <div className="row pb-4">
        <div className="t-icon-container-big col-2">
          <img className="" src={ProfileIcon} />
        </div>
        <div className="col-10">
          <h1>55%</h1>
          <p className="t-gray">
            doloremque unde magni quo accusantium vitae hic natus rem
            nemo.
          </p>
        </div>
      </div>
      <button
        className="t-text-btn position-absolute"
        style={{
            bottom: 20,
            right: 20,
            fontSize: 12,
            fontWeight: 500,
          }}
      >
        Update profile
        <img className="mx-3" src={RightArrow} />
      </button>
    </div>
  
    <div
      className="t-d-md-card position-relative margin-right col-md-4 col-12 mb-4 mb-md-0"
    >
      <div className="row pb-4">
        <div className="t-fake col-2">
          <img className="" src={LocationIcon} />
        </div>
        <div className="col-10">
          <h1>09</h1>
          <p className="t-gray">doloremque unde magni quo accusantium</p>
        </div>
      </div>
      <button
        className="t-text-btn position-absolute"
        style={{
          bottom: 20,
          right: 20,
          fontSize: 12,
          fontWeight: 500,
        }}
      >
        Update profile
        <img className="mx-3" src={RightArrow} />
      </button>
    </div>


    <div className="col-md-3 col-12 t-resume">
      <p className="" style={{
        fontSize: 18,
        fontWeight: 500,
      }}>Resume</p>
      <div className="mx-auto">
        {/* <div className="t-logo-container mx-3">
          <img
            style="margin-left: -3px; margin-top: -2px"
            src="assets/profile-icon-white.svg"
            alt="home-icon"
          />
          <p className="t-sidebar-item-text fs-5">12 Feb 2023</p>
        </div> */}
        <div className="t-user-resume px-2">
          <div className="t-icon-container-mid">
            <img className="" src={SmsIcon} />
          </div>
          <div className="mt-3">
            <p>MyResume.pdf</p>
          </div>
          <div>
            <img src={ArrowDown}/>
          </div>
        </div>
      </div>
    </div>
  </div></>
  )
}

export default ProfileCard