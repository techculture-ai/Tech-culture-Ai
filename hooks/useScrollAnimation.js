'use client'
import React, { useEffect, useRef, useState } from 'react'

export const useScrollAnimation = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
    ...options
  }

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!defaultOptions.triggerOnce || !hasAnimated)) {
          setIsVisible(true)
          setHasAnimated(true)
        } else if (!defaultOptions.triggerOnce && !entry.isIntersecting) {
          setIsVisible(false)
        }
      },
      {
        threshold: defaultOptions.threshold,
        rootMargin: defaultOptions.rootMargin
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [hasAnimated, defaultOptions.triggerOnce, defaultOptions.threshold, defaultOptions.rootMargin])

  return { elementRef, isVisible }
}

// Animation component for sections
export const AnimatedSection = ({ 
  children, 
  animation = 'fadeInUp', 
  duration = 'duration-700',
  delay = 'delay-0',
  className = '',
  ...options 
}) => {
  const { elementRef, isVisible } = useScrollAnimation(options)
  
  const animations = {
    fadeInUp: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    fadeInDown: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8',
    fadeInLeft: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
    fadeInRight: isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
    scaleIn: isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    slideInFromBottom: isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
  }

  return (
    <div 
      ref={elementRef}
      className={`transform transition-all ${duration} ${delay} ease-out ${animations[animation]} ${className}`}
    >
      {children}
    </div>
  )
}
