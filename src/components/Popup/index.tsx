import React, { useEffect, useState } from "react";
import "./popup.css";
import PropTypes from "prop-types";

const CustomPopup = (props: { onClose: (arg0: boolean) => void; show: boolean | ((prevState: boolean) => boolean); title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [show, setShow] = useState(false);

  const closeHandler = () => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
    >
      <div>
        <h2>{props.title}</h2>
        <span onClick={closeHandler}>
          &times;
        </span>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CustomPopup;
