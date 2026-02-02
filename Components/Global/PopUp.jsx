import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import toast from "react-hot-toast";

import { FaWallet, FaExternalLinkAlt, CiHeart } from "../SVG/index";

const FORMSPREE_API = process.env.NEXT_PUBLIC_FORMSPREE_API;

const PopUp = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_API);

  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  if (state.succeeded) {
    notifySuccess("Thanks for sending your message!");
  }

  return (
    <div
      className="modal fade popup"
      id="popup_bid"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <form className="modal-body" onSubmit={handleSubmit}>
            <div className="image">
              <img src="assets/images/backgroup-section/popup.png" alt="" />
            </div>
            <div className="logo-rotate">
              <img
                src="logo.png"
                style={{
                  width: "60px",
                  height: "auto",
                }}
              />
            </div>
            <h2>Subscribe to our newsletter</h2>
            <p>Subscribe for our newsletter to stay in the loop</p>
            <fieldset className="email">
              <input
                className="style-1"
                placeholder="Email address*"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required=""
                type="email"
                id="email"
                name="email"
              />
            </fieldset>
            <div className="button_container_NEWLATER">
              <button
                type="submit"
                disabled={state.submitting}
                className="tf-button style-2 h50 w190 mr-30"
              >
                Subscribe
                <FaExternalLinkAlt />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
