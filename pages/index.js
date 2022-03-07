import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.svg'
import metaImg from '../public/meta.png'

export default function Home() {
  return (
    <div className="max-w-lg px-6 py-10 -mt-32 animate-500 fadeinup sm:-mt-0"> 
      <Head>
        <title>pynovi, Formerly Wehost Africa | WordPress, Website, VPS and Reseller Hosting</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hosting for WordPress, website hosting resellers, and virtual private servers (VPS). Fully-optimised SSD platforms with 100% African  support."/>
        <meta content={metaImg} property="twitter:image"/>
        <meta property="og:type" content="website"/>
        <meta content="summary_large_image" name="twitter:card"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Red+Hat+Display:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div>
        <Image src={Logo} alt="Aptiva Inspired Business" className=" h-12 w-12 inline-block "  />
        <span className="align-top inline-block px-3 py-2 ml-5 font-red text-sm font-medium leading-tight  bg-pynovi-blue text-cultured rounded ">Coming Soon😎!</span>
      </div>

    <p className="mt-2.5 leading-loose font-red font-light text-cultured">
        Formerly known as <span className="font-medium text-cultured border-b-2 border-pynovi-blue" ></span>Wehost Africa,</span> pynovi is an African cloud <span className="font-medium text-cultured border-b-2 border-pynovi-blue" > services provider.  </span> Focusing on good value, consistent service delivery,  <span className="font-medium text-cultured border-b-2 border-pantone"> </span> and infrastructure stability <span className="font-medium text-cultured border-b-2 border-pynovi-blue"> that businesses need to grow online.</span>
    </p>
   </div>
  )
}