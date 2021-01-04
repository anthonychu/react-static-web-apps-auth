import React from "react";
import { StaticWebAppsClassName } from "./constants";
const Login = ({ name, id, postLoginRedirect, }) => {
    return (React.createElement("a", { href: `/.auth/login/${id}${postLoginRedirect ? `?post_login_redirect=${postLoginRedirect}` : ""}`, className: `${id} login ${StaticWebAppsClassName}` },
        "Sign in using ",
        name));
};
export default Login;
//# sourceMappingURL=Login.js.map