import { cn } from "@/lib/utils"

interface LoaderProps {
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'secondary' | 'accent'
}

export default function Loader({ size = 'medium', color = 'primary' }: LoaderProps = {}) {
  return (
    <div
      className={cn(
        "inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",
        {
          'h-4 w-4': size === 'small',
          'h-8 w-8': size === 'medium',
          'h-12 w-12': size === 'large',
          'text-primary': color === 'primary',
          'text-secondary': color === 'secondary',
          'text-accent': color === 'accent',
        }
      )}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  )
}