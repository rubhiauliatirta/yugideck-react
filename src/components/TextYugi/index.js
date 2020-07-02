import React from 'react';



export default function TextYugi(props) {  
  
  const style = {
    fontFamily : font[props.type] || "MatrixReguler",
    fontSize : fontSize[props.size] || "1.5rem",
    color : props.color || "black",
    animation : props.glow && "glow 1s ease-in-out infinite alternate",
    lineHeight : props.normal && "normal",
    ...props.style
  }

  const className = props.className || ""

  const Component = props.component
  

  return (
    <>
    {
      Component ? (
        <Component style={style} className={className}>
        {
          props.children
        }
        </Component>
      ) : (
        <div style={style} className={className}>
        {
          props.children
        }
      </div>
      )
    }
    </>
    
  );
}

const font = {
  matrix : "MatrixReguler",
  fantasy : "fantasy"
}

const fontSize = {
  sm : "1rem",
  md : "1.5rem",
  lg : "2rem",
  xl : "2.5rem"
}


