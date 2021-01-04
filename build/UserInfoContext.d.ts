/// <reference types="react" />
import { AuthProviders } from "./types";
export declare type UserInfo = {
    identityProvider: undefined | AuthProviders;
    userId: string | undefined;
    userDetails: string | undefined;
    userRoles: string[];
};
declare const UserInfoContextProvider: ({ children }: {
    children: JSX.Element;
}) => JSX.Element;
declare const useUserInfo: () => UserInfo;
export { UserInfoContextProvider, useUserInfo };
//# sourceMappingURL=UserInfoContext.d.ts.map