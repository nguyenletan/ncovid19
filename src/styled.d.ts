import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      background: string;
      backgroundLight: string;
      borderColor: string,
      text: string;
      textLight: string;
      highlight: string;
      warning: string;
      success: string;
      danger: string;
    };
  }
}
