import Navigation from './components/nav/navigation'
import './globals.css'

export const metadata = {
  title: 'Todo List',
  description: 'A Todo List created with the Next.js 13 app directory.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-dark text-light-secondary">
        <Navigation />
        <main className='px-6 py-4'>
         {children}
        </main>
      </body>
    </html>
  )
}
