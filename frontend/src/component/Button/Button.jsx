import React from 'react';
export default function Button(props) {
    const { onClick, bgColor, tColor, title, cName, icon } = props;
    return (
        <>
            <button
                onClick={onClick}
                className={`py-[12px] px-[20px] font-medium text-center cursor-pointer text-[16px] rounded + ${bgColor} + ${tColor} + ${cName}`}
            >
                {icon} {title}
            </button>
        </>
    );
}
