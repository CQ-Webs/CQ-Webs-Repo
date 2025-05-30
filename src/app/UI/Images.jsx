"use client"
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

const Images = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200])

  // Monitor scroll progress and update visibility state
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.04 && !isVisible) {
      setIsVisible(true)
    } else if (latest <= 0.04 && isVisible) {
      setIsVisible(false)
    }
  })

  return (
    <div className='w-full max-w-full flex justify-center px-4 md:px-6 relative'>
      <motion.div 
        className='rounded-md h-auto max-h-[700px] w-full max-w-[1200px]'
        style={{ y }}
      >
        <img
          src="/images/hero.png"
          alt="hero image"
          className="w-full h-full object-cover rounded-md"
        />
      </motion.div>
      
      {/* Little divs that appear on scroll */}
      <motion.div 
        className="absolute bottom-[-10px] md:right-[1%] md:w-[500px] md:h-[300px] flex gap-3 w-[150px] h-[100px] right-[1px] object-cover rounded-md"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{ y: y2 }}
      >
        <img src="/images/location.PNG" alt="WEBSITE IMAGE" />
      </motion.div>

      <motion.div 
        className="absolute bottom-[-100px] left-[5%] flex gap-3 rounded-md w-[250px] h-[130px] object-cover md:w-[400px] md:h-[200px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{ y: y3 }}
      >
        <img src="/images/web1.png" alt="WEBSITE IMAGE" />
      </motion.div>
      
      <motion.div 
        className="absolute md:top-[100px] top-[10px] left-[4%] flex gap-3 rounded-md w-[100px] object-cover md:w-[350px] md:h-[150px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 50 
        }}
        transition={{ duration: 0.5 }}
      >
        <img src="/images/code.png" alt="WEBSITE IMAGE"/>
      </motion.div>
    </div>
  )
}

export default Images