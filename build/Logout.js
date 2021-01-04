import React from "react";
import { StaticWebAppsClassName } from "./constants";
const Logout = ({ postLogoutRedirect }) => (React.createElement("a", { href: `/.auth/logout${postLogoutRedirect ? `?post_logout_redirect=${postLogoutRedirect}` : ""}`, className: `logout ${StaticWebAppsClassName}` }, "Logout"));
export { Logout };
//# sourceMappingURL=Logout.js.map