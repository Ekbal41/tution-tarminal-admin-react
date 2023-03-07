import React from "react";

function MembershipNotice() {
  return (
    <>
      <div className="row mt-4">
        <div className="col-md-6 t-d-card position-relative p-4  mb-4 ">
          <div className="d-flex text-white align-items-center">
            <h1 className="fs-2">Membership</h1>
            <button className="mx-4 t-save-btn px-4">Save 400</button>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sequi saepe enim tempora. Illum obcaecati voluptate odio? In
            recusandae ex rerum quam eius tempora tempore.
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-white fw-bold fs-4">
              450<span className="fs-5 fw-light t-gray">/months</span>
            </p>
            <button className="t-save-btn-fill fs-5 px-5">Try 6 months</button>
          </div>
        </div>
        <div className="col-md-6 t-d-card-white p-4">
          <h3 className="fs-5 fw-400">Notice Board</h3>
          <div className="t-text-intro mt-4">
            <p className="t-normal-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.sit amet
              consectetur adipisicing elit. Praesentium, quidem! Voluptates in
              nam corporis accusamus, explicabo ex voluptatibus vitae
              dolorum!voluptatibus vitae dolorum!
            </p>
          </div>
          <p className="fw-light mt-4">5 Feb 2023</p>
        </div>
      </div>
      {/* <div className="row mt-4">
        <div className="col-md-6  mb-4 mb-md-0 t-d-card p-4 position-relative">
          <div className="d-flex text-white align-items-center">
            <h1 className="fs-2">Membership</h1>
            <button className="mx-4 t-save-btn px-4">Save 400</button>
          </div>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            sequi saepe enim tempora. Illum obcaecati voluptate odio? In
            recusandae ex rerum quam eius tempora tempore.
          </p>
          <div className="d-flex justify-content-between">
            <p className="text-white fw-bold fs-4">
              450<span className="fs-5 fw-light t-gray">/months</span>
            </p>
            <button className="t-save-btn-fill fs-5 px-5">Try 6 months</button>
          </div>
        </div>
        <div className="mx-1">

        </div>

        <div className="col-md-5  t-d-card-white p-4">
          <h3 className="fs-5 fw-400">Notice Board</h3>
          <div className="t-text-intro mt-4">
            <p className="t-normal-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.sit amet
              consectetur adipisicing elit. Praesentium, quidem! Voluptates in
              nam corporis accusamus, explicabo ex voluptatibus vitae
              dolorum!voluptatibus vitae dolorum!
            </p>
          </div>
          <p className="fw-light mt-4">5 Feb 2023</p>
        </div>
      </div> */}
    </>
  );
}

export default MembershipNotice;
