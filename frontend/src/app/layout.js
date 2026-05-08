import NavBar from "../components/layout/NavBar";
import "./globals.css"
import { Inter } from "next/font/google";

const inter= Inter({
  subsets:["latin"],
  variable:"--font-inter"
})

export const metaData= {
  title:"Milton-Brush-Ware",
  description:"Industrial Brush Manufacturing Company"
}


export default function RootLayout({children}){
  return(
    <html lang="en">
      <body
        className="inter.variable"
      >
        <NavBar/>
        {children}
      </body>
    </html>
  )
}


// export default function Home(){
//   return(
//     <h1>
//       Home
//     </h1>
//   )
// }