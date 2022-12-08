import React from "react";

interface NotificationProps {
  type: "info" | "warning" | "success" | "error";
  message: string | null;
  title: string | null;
  link?: string | null;
  linkText?: string | null;
  shadow?: boolean | false;
}

const Notification = ({
  type = "info",
  title,
  message,
  link,
  linkText,
  shadow,
}: NotificationProps) => {
  let notificationClass = "";

  switch (type) {
    case "success":
      notificationClass = "notification--success";
      break;
    case "error":
      notificationClass = "notification--error";
      break;
    case "warning":
      notificationClass = "notification--warning";
      break;
  }

  const shadowClass = shadow ? "" : " shadow-none";

  return (
    <div className={"notification " + notificationClass + shadowClass}>
      <span className="notification__icon" aria-hidden="true">
        {type === "info" && <p>Info</p>}
        {type === "warning" && <p>Warning</p>}
        {type === "success" && <p>Success</p>}
        {type === "error" && <p>Error</p>}
      </span>
      <div className="notification__content ">
        <p className="notification__text">
          <p className="notification__title">{title}</p>
          {message}
          {link && (
            <a href={link} className="notification__link">
              {linkText}
            </a>
          )}
        </p>
      </div>
    </div>
  );
};
export default Notification;
