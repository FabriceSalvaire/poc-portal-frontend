/**************************************************************************************************/

// import { createGenerateClassName } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// import "./styles.css";

/**************************************************************************************************/

// https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
// export const generate_class_name = createGenerateClassName({
// });

// https://material-ui.com/customization/theming/#createmuitheme-options-args-theme
// Generate a theme base on the options received
export const theme = createMuiTheme({
    spacing: 8,

    // https://material-ui.com/customization/globals/
    // change every single style injected by Material-UI into the DOM
    overrides: {
    },
});
