import { useState } from "react";

import SigninComponent from "./signin/signin";
import SignupComponent from "./signup/signup";

const AuthComponent: React.FC<any> = () => {

    const [isShowSignup, setIsShowSignup] = useState<boolean>(true);

    return (
        <div>
            {isShowSignup ? (
                <SignupComponent setIsShowSignup={setIsShowSignup} />
            ) : (
                <SigninComponent setIsShowSignup={setIsShowSignup} />
            )}
        </div>
    )
}


export default AuthComponent;