import { keyframes } from "styled-components"

export const downWithFadeInAnimation = () =>
  keyframes`
    0%{transform:translate3d(0,-40px,0);opacity:0}
    to{transform:translateZ(0);opacity:1}}
  `

export const menuAnimation = from =>
  keyframes`
    0%{transform:translate3d(0,${String(from)},-50px);opacity:0}
    to{transform:translate3d(0, 0, 0);opacity:1}}
  `
