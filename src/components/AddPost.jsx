import React from "react";
import Logo from "../assets/img/logo.svg";
import Swatch from "../assets/img/color-swatch.png";
import leftIcon from "../assets/img/back.png";
import { Link } from "react-router-dom";

function AddPost({ setTitle, setStatus, setTime, onSubmit, title, time, status }) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row p-2 border">
          <div className="col-2">
            <Link to="/" className="nav__linkvt">
              <img src={Logo} alt="" width={"90"} />
            </Link>
          </div>
          <div className="col-10 d-flex align-items-center">
            <Link to="/">
              <img src={leftIcon} alt="back" />
            </Link>
            <h3 className="ms-2">New Add Post</h3>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light ">
        <div className="row">
          <div className="col-2 bg-white">
            <button className="btn btn-light d-flex mt-3 form-control">
              <img src={Swatch} alt="post" className="img-fluid" />
              <h4 className="ms-3">Posts</h4>
            </button>
          </div>
          <div className="col-10 py-1 px-3">
            <div className="bg-white rounded p-2 section__page">
              <div className="row mt-3">
                <div className="col-12 ">
                  <div className="row">
                    <div className="col-4 ms-2">
                      <form className="form">
                        <h3>Post Information</h3>
                        <input
                          type="text"
                          className="form-control mt-2 bg-light"
                          placeholder="Title"
                          required
                          value={title}
                          onChange={(evt) => setTitle(evt.target.value)}
                        />
                        <select
                          name="status"
                          className="form-select mt-2 bg-light"
                          value={status}
                          onChange={(evt) => setStatus(evt.target.value)}
                        >
                          <optgroup label="Tanlang">Tanlang</optgroup>
                          <option value="Draft">Draft</option>
                          <option value="Published">Published</option>
                        </select>
                        <input
                          type="date"
                          className="form-control mt-2 bg-light"
                          name="time"
                          required
                          value={time}
                          onChange={(evt) => setTime(evt.target.value)}
                        />
                        <button
                          type="button"
                          className="btn btn-primary mt-4 px-5"
                          onClick={onSubmit}
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;