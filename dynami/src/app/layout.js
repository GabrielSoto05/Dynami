import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}