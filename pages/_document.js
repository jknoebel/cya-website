import Document, { Html, Head, Main, NextScript } from 'next/document'

class Header extends Document {

  render() {
    return (
      <Html>
        <Head>
       <head>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-10335930-2"></script>
            <script>{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-10335930-2');
            `}</script>

            
            <title>Cathedral Young Adults | St. Mary Cathedral | Austin, TX</title>
            <meta name="description" content="The official website of the Cathedral Young Adults. Our mission is to call, sanctify, and send young adults (18-30+) in Austin." />
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest"></link>
	    </head></Head>
        <body class="is-preload">
          <Main />
          <NextScript />
        </body>
        {/* <!-- Scripts --> */}
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </Html>
    )
  }
}

export default Header