import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex items-center justify-center p-6 text-grey-800 gap-2 mt-16">
      <p className="text-sm font-light m-0">© Synesthesia {currentYear}</p>
      <span>|</span>
      <a
        href="https://github.com/Valcoholics/synesthesia-splash"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-gray-600"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 fill-current"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
          />
        </svg>
      </a>
      <a
        //href="https://t.me/+F8tv1Qr9maNhMjRh"
        target="_blank"
        rel="noreferrer"
        className="transition hover:text-gray-600"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <defs>
            <linearGradient
              id="paint0_linear_44_6"
              x1="12"
              y1="24"
              x2="12"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#1D93D2" />
              <stop offset="1" stopColor="#38B0E3" />
            </linearGradient>
            <clipPath id="clip0_44_6">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </a>
    </div>
  )
}
