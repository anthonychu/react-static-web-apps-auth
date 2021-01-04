/// <reference types="react" />
export declare type LoginProviderProps = {
    azureAD: boolean;
    facebook: boolean;
    twitter: boolean;
    github: boolean;
    google: boolean;
    postLoginRedirect: string;
};
declare const AzureADLogin: ({ postLoginRedirect }: {
    postLoginRedirect: string;
}) => JSX.Element;
declare const FacebookLogin: ({ postLoginRedirect, }: {
    postLoginRedirect: string;
}) => JSX.Element;
declare const TwitterLogin: ({ postLoginRedirect }: {
    postLoginRedirect: string;
}) => JSX.Element;
declare const GitHubLogin: ({ postLoginRedirect }: {
    postLoginRedirect: string;
}) => JSX.Element;
declare const GoogleLogin: ({ postLoginRedirect }: {
    postLoginRedirect: string;
}) => JSX.Element;
declare const StaticWebAuthLogins: {
    (props: LoginProviderProps): JSX.Element;
    defaultProps: {
        azureAD: boolean;
        facebook: boolean;
        twitter: boolean;
        github: boolean;
        google: boolean;
        postLoginRedirect: string;
    };
};
export { StaticWebAuthLogins, AzureADLogin, FacebookLogin, GitHubLogin, GoogleLogin, TwitterLogin, };
//# sourceMappingURL=StaticWebAuthLogins.d.ts.map