import { Head, Html, Main, NextScript } from "next/document"
// import clsx from "clsx"

export default function Document(props) {
  let pageProps = props.__NEXT_DATA__?.props?.pageProps

  return (
    <Html className="h-full scroll-smooth bg-white antialiased" lang="en">
      <Head></Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
