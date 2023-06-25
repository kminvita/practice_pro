import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function UserPage() {
    const location = useLocation();
    const { hash, key, pathname, search, state } = location;
    console.log(location);

    return (
        <>유저페이지입니다.</>
    );
};

export default UserPage;