import { authOptions } from "@/lib/auth";
import { children } from "@/providers/ThemeProvider";
import NextAuth from "next-auth";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";


const handler =NextAuth(authOptions)


// export const ThemeProvider=({children,...props}:ThemeProviderProps) => {
//     return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
// };
