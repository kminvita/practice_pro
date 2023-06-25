import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function MainPage() {
    fetch
    useEffect(() => {
        const handler = (e) =>{};
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("umount", handler);
        };
    }, []);

    return (
        <>
            메인페이지입니다.
            <Link to="/users">유저페이지</Link>
            <Link to="/detail">디테일페이지</Link>
        </>
    );
};

export default MainPage;