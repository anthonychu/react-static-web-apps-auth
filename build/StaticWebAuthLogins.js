import React from "react";
import Login from "./Login";
const AzureADLogin = ({ postLoginRedirect }) => (React.createElement(Login, { name: "Azure AD", id: "aad", postLoginRedirect: postLoginRedirect }));
const FacebookLogin = ({ postLoginRedirect, }) => (React.createElement(Login, { name: "Facebook", id: "facebook", postLoginRedirect: postLoginRedirect }));
const TwitterLogin = ({ postLoginRedirect }) => (React.createElement(Login, { name: "Twitter", id: "twitter", postLoginRedirect: postLoginRedirect }));
const GitHubLogin = ({ postLoginRedirect }) => (React.createElement(Login, { name: "GitHub", id: "github", postLoginRedirect: postLoginRedirect }));
const GoogleLogin = ({ postLoginRedirect }) => (React.createElement(Login, { name: "Google", id: "google", postLoginRedirect: postLoginRedirect }));
const StaticWebAuthLogins = (props) => {
    const providers = [];
    if (props.azureAD) {
        providers.push(React.createElement(AzureADLogin, { postLoginRedirect: props.postLoginRedirect }));
    }
    if (props.facebook) {
        providers.push(React.createElement(FacebookLogin, { postLoginRedirect: props.postLoginRedirect }));
    }
    if (props.twitter) {
        providers.push(React.createElement(TwitterLogin, { postLoginRedirect: props.postLoginRedirect }));
    }
    if (props.github) {
        providers.push(React.createElement(GitHubLogin, { postLoginRedirect: props.postLoginRedirect }));
    }
    if (props.google) {
        providers.push(React.createElement(GoogleLogin, { postLoginRedirect: props.postLoginRedirect }));
    }
    return React.createElement(React.Fragment, null, providers);
};
StaticWebAuthLogins.defaultProps = {
    azureAD: true,
    facebook: true,
    twitter: true,
    github: true,
    google: true,
    postLoginRedirect: "",
};
export { StaticWebAuthLogins, AzureADLogin, FacebookLogin, GitHubLogin, GoogleLogin, TwitterLogin, };
//# sourceMappingURL=StaticWebAuthLogins.js.map