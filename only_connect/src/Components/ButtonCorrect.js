import React from "react";

function ButtonCorrect(props){
    
    function handleClick() {
        if (props.clickBlock) {
            props.clickBlock();
        }
    }

    var text_align = "text-center"
    var text_size = "text-2xl sm:text-3xl lg:text-5xl";
    var text_color = "text-dark-shade"
    var width = "w-full sm:px-8 lg:px-16";
    var height = "h-10 lg:h-20";
    //var color = "bg-gradient-to-t from-clue to-white";
    var color = "bg-light-shade";
    var font_color = "text-black font-sans";
    var align_content = "flex justify-center items-center select-none"
    //var border = "border-2 border-red-700"
    var rounded = "rounded-xl lg:rounded-2xl"
    var shadow = "shadow-3xl"

    var text_style = `${text_size} ${text_align} ${text_color}`
    var style = `${width}
    ${height}
    ${color}
    ${shadow}
    ${rounded}
    ${props.hidden ? "invisible" : "cursor-pointer"}
    ${text_style}
    ${font_color}
    ${align_content}
    `

    return (
        <div
            onClick={props.matched ? undefined : handleClick}
            className={`
                ${style}
                `}
        >
            {props.children}
        </div>
    );
};

export default ButtonCorrect;
