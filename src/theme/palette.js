import {createMuiTheme} from "@material-ui/core/styles/index";
import { colors } from 'theme'

export const palette = createMuiTheme({
  palette: {
    primary: { main: colors.purple }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  }
});
