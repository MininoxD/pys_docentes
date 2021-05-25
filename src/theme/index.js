import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    primary: "#5744A5",
    onePrimary: "#AAA7F2",
    twoPrimary: "#6530D9",
    secondary: "#F2F2F2",
    textinput: "#8898AA",

    /* dropdownm */
    dropPrimary: "#F1F3F9",
    dropSecondary: "#292626",
    dropOnePrimary: "#E3E4EA",
    dropHover: "#E7E9EF",

    primaryIcon: "#050505",
    secondaryButtonBkg: "#e4e6eb",
    hoverIcon: "rgba(63,73,80,.15)",

    primaryText: "#050505",
    secondaryText: "#65676b",
    positive: "#31a24c",
    titleText: "#1877f2"
}

export const darkTheme = {
    primary: "#5744A5",
    onePrimary: "#AAA7F2",
    twoPrimary: "#6530D9",
    secondary: "#F2F2F2",
    textinput: "#8898AA",


    dropPrimary: "#F1F3F9",
    dropSecondary: "#292626",
    dropOnePrimary: "#E3E4EA",
    dropHover: "#E7E9EF",

    primaryIcon: "#050505",
    secondaryButtonBkg: "#e4e6eb",
    hoverIcon: "rgba(63,73,80,.15)",

    primaryText: "#050505",
    secondaryText: "#65676b",
    positive: "#31a24c",
    titleText: "#1877f2"
}

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: "arial";
        font-weight: 300;
        background-color: ${({ theme }) => theme.secondaryButtonBkg};
    }
`