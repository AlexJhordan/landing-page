'use client'
import { P, Span } from '@/components/Typography'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface Data {
  info: object
  results: object
}

export const ReviewStars = ({ className }: { className?: string }) => {
  const [data, setData] = useState({} as Data)

  const images = [
    {
      id: 'img1',
      src: 'https://images.unsplash.com/photo-1535982368253-05d640fe0755?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
      alt: 'Foto de Candice Picard na Unsplash',
    },
    {
      id: 'img2',
      src: 'https://images.unsplash.com/photo-1527082395-e939b847da0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Foto de Nonsap Visuals na Unsplash',
    },
    {
      id: 'img3',
      src: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Foto de Raoul Droog na Unsplash',
    },
  ]
  useEffect(() => {
    let isMounted = true
    fetch('./api/randomUser')
      .then((res) => res.json())
      .then((res) => {
        if (isMounted) setData(res)
      })
    return () => {
      isMounted = false
    }
  }, [])
  console.log(data.results)

  return (
    <article className={twMerge('flex-wrap xs:flex gap-2 mx-auto lg:mx-0', className)}>
      <div className="*:nth-1:ml-0">
        {images.map((img) => (
          <Image
            width={40}
            height={40}
            className="avatar inline-block border-background border-3 -ml-4 box-content"
            src={img.src}
            alt={img.alt}
            key={img.id}
          />
        ))}
      </div>
      <div>
        <P className="font-medium">Clientes satisfeitos</P>
        <P adjust="align-content">
          <FaStar className="text-cta-secondary" />
          4.8
          <Span size="xs" variant="muted">
            (12.5k Revieew)
          </Span>
        </P>
      </div>
    </article>
  )
}
