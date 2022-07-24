import {AppBar, Container, createTheme, ThemeProvider, Typography} from "@material-ui/core";
import HeaderContainer from "../Header/HeaderContainer";

const theme = createTheme({

});

const Main = () => {
    return (
        <ThemeProvider theme={theme}>
            <HeaderContainer/>
            <ContentContainer/>
        </ThemeProvider>
    )
}

const ContentContainer = () => {
    return (
        <div>Hello</div>
    )
}

export default Main;