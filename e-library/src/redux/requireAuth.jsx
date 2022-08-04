import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectCurrentToken } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import { username, credentials } from "./reducer";
import { userInfo } from "../Components/homepage/body";

const RequireAuth = () => {

    const dispatch = useDispatch();
    dispatch(username(userInfo.username))
    dispatch(credentials(userInfo.token))
    const currentToken = useSelector(selectCurrentToken)
    const location = useLocation()
    

    return (
        currentToken
            ? <Outlet />
            : <Navigate to='/' state={{ from: location}} replace />
    )
}

export default RequireAuth