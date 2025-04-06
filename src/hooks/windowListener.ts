import { useEffect, useState } from 'react'

// not used
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    const verify = () => {
      const larguraTela = window.innerWidth
      setIsMobile(larguraTela <= 1024)
    }
    verify()
    window.addEventListener('resize', verify)
    return () => {
      window.removeEventListener('resize', verify)
    }
  }, [])
  return [isMobile, setIsMobile] as const
}
