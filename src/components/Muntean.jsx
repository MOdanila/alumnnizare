import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Muntean() {
    const navigate = useNavigate();
    const goToPresPage = () => {
        navigate("/Razvan Muntean");
    };
    return (
        <div>
            <h1>Muntean</h1>
            <button onClick={goToPresPage}>Ce drq a facut asta?</button>
        </div>
    );
}