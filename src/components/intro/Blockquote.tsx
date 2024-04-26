import React from "react"
import cn from "classnames"

interface BlockquoteProps {
  name: string,
  description: string,
  quote: string
}

const Blockquote: React.FC<BlockquoteProps> = ({
  name, description, quote
}) => {
  return (
    <figure className="max-w-screen-md mx-auto text-center self-center">
      <svg
        className={cn(
          "w-10 h-10 mx-auto mb-3 text-gray-400",
          "dark:text-gray-600"
        )}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <blockquote>
        <p
          className={cn(
            "text-2xl italic font-medium text-gray-900",
            "dark:text-white"
          )}
        >
          {quote}
        </p>
      </blockquote>
      <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
        <div
          className={cn(
            "flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500",
            "dark:divide-gray-700"
          )}
        >
          <cite
            className={cn(
              "pe-3 font-medium text-gray-900",
              "dark:text-white"
            )}
          >
            {name}
          </cite>
          <cite
            className={cn(
              "ps-3 text-sm text-gray-500",
              "dark:text-gray-400"
            )}
          >
            {description}
          </cite>
        </div>
      </figcaption>
    </figure>
  )
}

export default Blockquote
