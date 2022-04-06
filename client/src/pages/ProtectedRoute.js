import { useAppContext } from "../context/appContext.js"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children }) => {
    const { user } = useAppContext()
    //uncomment below when login is correct
    // if (!user) {
    //     return <Navigate to='/landing' />
    // }
    return children
}

export default ProtectedRoute