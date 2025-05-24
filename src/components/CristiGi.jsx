import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function CristiGi() {
    const navigate = useNavigate();
    const goToPresPage = () => {
        navigate("/Cristi Gi");
    };
    return (
        <div>
            <h1>Cristi Gi</h1>
            <button onClick={goToPresPage}>Dar asta ce drq a facut?</button>
        </div>
    );
}