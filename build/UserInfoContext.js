var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useContext, useEffect, useState } from "react";
const defaultUserInfo = {
    identityProvider: undefined,
    userId: undefined,
    userDetails: undefined,
    userRoles: [],
};
const UserInfoContext = React.createContext(defaultUserInfo);
const UserInfoContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(defaultUserInfo);
    useEffect(() => {
        const run = () => __awaiter(void 0, void 0, void 0, function* () {
            const res = yield fetch("/.auth/me");
            const json = yield res.json();
            if (json.clientPrincipal) {
                setUserInfo(json.clientPrincipal);
            }
        });
        run();
    }, []);
    return (React.createElement(UserInfoContext.Provider, { value: userInfo }, children));
};
const useUserInfo = () => useContext(UserInfoContext);
export { UserInfoContextProvider, useUserInfo };
//# sourceMappingURL=UserInfoContext.js.map