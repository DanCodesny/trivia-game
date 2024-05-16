import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
});
import { ThemeProvider } from "@/components/theme-provider";
import { CheckCircle2Icon, CircleXIcon, InfoIcon, LoaderCircleIcon, TriangleAlertIcon } from "lucide-react";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          <main>{children}</main>
          <Toaster 
            closeButton={true}
            icons={{
              success: <CheckCircle2Icon />,
              info: <InfoIcon />,
              warning: <TriangleAlertIcon />,
              error: <CircleXIcon />,
              loading: <LoaderCircleIcon />,
            }}
            richColors={true}
            toastOptions={{
              unstyled: true,
              classNames: {
                error: "bg-destructive text-destructive-foreground",
                success: "bg-success text-success-foreground",
                warning: "bg-warning text-warning-foreground",
                info: "bg-info text-info-foreground",
              }
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
