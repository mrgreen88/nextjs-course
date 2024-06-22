import "@/app/styles/global.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
  title: "Next.js Courses",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <Header />
        <div className="h-full">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
