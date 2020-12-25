import React from 'react'

function Rectangle({...props}){

    function handleClick(){
        if(props.clickBlock)
        {
            let obj = {
                        word: props.word,
                        id: props.id,
                        group: props.group
            }
            props.clickBlock(obj);
        }
    }
    var text_size = "";
    var width = "";
    var height = "";
    var color = "bg-oc-blue";


    //ANSWER
    if(props.type === "answer") {
        width = "w-full p-2";
        height = "h-12 lg:h-20";
        text_size = "text-2xl sm:text-4xl lg:text-5xl";
    }

    //WALL
    else if (props.type === "wall")
    {
        width = "w-20 sm:w-24 lg:w-52 cursor-pointer";
        height = "h-16 sm:h-20 lg:h-40";
        text_size = "text-1xl lg:text-4xl";
        color = props.color;
    }

    //VOWELS
    else if (props.type === "vowels")
    {
        width = "p-4";
        height = "";
        text_size = "text-3xl sm:text-4xl lg:text-5xl";
        color = "bg-blue-800 text-white";
    }
    else if (props.type === "timer")
    {
        width = "p-2";
        height = "h-12 lg:h-20";
        text_size = "text-2xl sm:text-4xl lg:text-5xl";
    }

    else
    {
        width = "w-16 sm:w-36 lg:w-80";
        height = "h-12 sm:h-28 lg:h-64";
        text_size = "text-2xl sm:text-6xl lg:text-8xl";
    }

    return (
      <div onClick={handleClick} className={`${width} ${height} ${color} shadow-2xl rounded-md ${props.hidden ? "invisible" : "" }`}>
          <h1 className={`${text_size} w-full h-full flex justify-center items-center text-center select-none`}>{props.children}</h1>
        </div>)
}

export default Rectangle