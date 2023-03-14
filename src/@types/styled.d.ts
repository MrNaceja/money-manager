import 'styled-components'
import { themeDefault } from '../styles/themes/themeDefault';

type ThemeApp = typeof themeDefault

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeApp {}
}