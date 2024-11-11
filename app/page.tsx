import { Inter } from 'next/font/google'
import { Footer, GifVideo } from '@/components'
import { XIcon } from '@/assets/socialMediaIcons'
import Image from 'next/image'
//import rainbowkit from '@/public/rainbowkit-logo.png'
//import warpcast from '@/public/warpcast-logo.png'
//import { creatorHouse2023Nfts, tokyo2024Nfts } from '@/utils/nfts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <header className="flex justify-center">
        <div className="p-4">
          <Image src="/PinkBanner.png" alt="Site Banner" width={800} height={300} className="object-cover mx-auto" />
        </div>
      </header>
      <main
        className={`text-center flex flex-col gap-16 justify-center items-center mx-4 md:mx-8 min-h-screen max-w-6xl ${inter.className}`}
      >
        <section>
          <h3 className="pb-6">Synesthesia</h3>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto pb-3">
            <p className="text-lg pb-1 font-semibold">What?</p>
            <p>
            Synesthesia is an emerging brand advancing new media arts through live music performances, installations, and collaborative creation in the Baltimore-Washington metropolitan region.
            </p>
          </div>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto text-center pb-3">
            <p className="text-lg pb-1 font-semibold">How?</p>
            <p>
            * "OpenHDMI" artist meetups serve as creative salons for knowledge exchange<br />

            * Live performance showcases and projection-mapping installations<br />

            * Hands-on technical workshops centered on tools like Processing and TouchDesigner<br />

            * Collaborative sessions leading to large-scale exhibitions 
            </p>
          </div>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto pb-3">
            <p className="text-lg pb-1 font-semibold">Why?</p>
            <p>
            Creative technology exists primarily within institutional walls - we aim to return this power to individual artists and creators. The initiative responds to a regional creative tech talent migration by building a rich environment where interdisciplinary artists excel through direct access to tools, community, and opportunities. 
            </p>
          </div>
          <div className="max-w-[75%] md:max-w-[65%] mx-auto">
            <p className="text-lg pb-1 font-semibold">Who?</p>
            <p>An interdependent community of creative technologists, digital artists, and live music performers, inspired by Phlote, LivecodeNYC, Dweller, DC Modular Society, and MUTEK. These artists work together to expand the possibilities of artistic expression and technological experimentation. Piloted by data____v </p>
          </div>
        </section>
        <section className="flex flex-col gap-2">
          <h3>Past Events</h3>
          <p>Synesthesia Meetup @ Phlote</p>

        </section>
        <section className="flex flex-col gap-2">
          <h3>Contact</h3>
          <div className="flex flex-col gap-2 rounded-md border border-grey_light px-6 py-4">
            <a
              href="https://instagram.com/data____v"
              target="_blank"
              rel="noreferrer"
              className="transition flex gap-2 w-fit items-center group"
            >
              <XIcon className="h-6 w-6 fill-current" />
              <p className="group-hover:text-blue-800 m-0">Data V</p>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
