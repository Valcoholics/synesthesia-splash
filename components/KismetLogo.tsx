/* eslint-disable jsx-a11y/media-has-caption */

'use client'

import { motion } from 'framer-motion'
// import logo from '../public/kismetCreatorHouse.png'

export function KismetLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <video
        width="700"
        height="500"
        autoPlay
        loop
        controls
        className="p-6 md:p-0 mt-3 mb-6 md:mb-10"
      >
        <source
          src="https://ipfs.decentralized-content.com/ipfs/bafybeigyvighxwjj5hoyc6iqy7j43pszflkb6d2g2sci5tvsnuyqsnapxe"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  )
}
