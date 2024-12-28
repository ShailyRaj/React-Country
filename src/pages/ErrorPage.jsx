import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

    return (
        <div>
            <h1>Oops! An error occurred</h1>
            {error && <p>page not found <br />{error.data}</p>}
            <br />
            <NavLink to="/" style={{color: "yellow"}}>Go back to Home</NavLink>
        </div>
    )
}