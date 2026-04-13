export const metadata = {
  title: 'Dynami',
  description: 'FSM fitness chatbot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}