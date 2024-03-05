import react from 'react';

const GeneralInput = ({ type, placeholder, style, handleOnChange, required }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} required={required} onChange={() => handleOnChange} style={style} />
        </>
    )
}

export default GeneralInput 