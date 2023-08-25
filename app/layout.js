export const metadata = {
  title: 'Todo List',
  description: 'A Todo List created with the Next.js 13 app directory.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
