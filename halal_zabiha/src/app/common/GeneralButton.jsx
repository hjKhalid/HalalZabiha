import React from "react";
const GeneralInput = ({ label, style, loading }) => {
    return (
        <>
            <button style={style} disabled={loading ? true : false}>{label}</button>

        </>
    )
}