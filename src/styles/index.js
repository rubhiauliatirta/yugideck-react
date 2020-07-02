import backgroundImage from "assets/nav.jpg"
import backgroundBlack from "assets/black.png"
import backgroundGray from "assets/gray.png"
import backgroundDelete from "assets/giphy.webp"

export const background = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
}

export const deleteZone =  {
  width: "400px",
  height: "100%",
  backgroundImage : `url(${backgroundDelete})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "black",
  backgroundPosition: "center",
  boxShadow: "0px 0px 100px 100px black inset"
}

export const bgBlack = {
  backgroundImage: `url(${backgroundBlack})`,
  backgroundSize: "cover",
}
export const bgGray = {
  backgroundImage: `url(${backgroundGray})`,
  backgroundSize: "cover",
}

export const fontMatrix15 = {
  fontFamily: "MatrixReguler",
  fontSize : "1.5rem",
}

export const buttonGold = {
  backgroundColor : "darkgoldenrod",
  ...background
}

