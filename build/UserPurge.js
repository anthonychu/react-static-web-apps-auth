import React from "react";
import { StaticWebAppsClassName } from "./constants";
const UserPurge = ({ globally, provider, }) => {
    const host = globally ? "identity.azurestaticapps.net" : location.hostname;
    return (React.createElement("a", { href: `https://${host}/.auth/purge/${provider}`, className: `purge ${StaticWebAppsClassName}` }, "Purge user information"));
};
UserPurge.defaultProps = {
    globally: false,
};
export { UserPurge };
//# sourceMappingURL=UserPurge.js.map