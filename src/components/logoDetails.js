import React from 'react'
import htmlLogo from '../assets/htmlLogo.png'
import cssLogo from '../assets/cssLogo.png'
import webflowLogo from '../assets/logo(10).png'
import reactLogo from '../assets/reactLogo.png'
import bubbleLogo from '../assets/logo(12).png'
import jsLogo from '../assets/logo(13).png'
import pythonLogo from '../assets/pythonLogo.png'
import vueLogo from '../assets/logo(15).png'
let randomPosition = Math.floor(Math.random() * 300)
// console.log(randomPosition)
const logoDetails = [
    {
        name: 'webflow',
        image: webflowLogo,
        style: 'absolute sm:left-20 left-6  sm:top-5  top-16  sm:w-12 sm:h-12 w-10 h-10 '
    },
    {
        name: 'css',
        image: cssLogo,
        style: `absolute sm:left-5 left-5 sm:bottom-24 bottom-24  sm:w-12 sm:h-12 w-10 h-10 `
        , log: console.log(randomPosition)
    },
    {
        name: 'html',
        image: htmlLogo,
        style: 'absolute sm:left-44 left-28  sm:bottom-7 bottom-7  sm:w-12 sm:h-12 w-10 h-10 '
    },
    {
        name: 'bubble',
        image: bubbleLogo,
        style: 'absolute sm:right-96 right-48  sm:top-5  top-24  sm:w-12 sm:h-12 w-10 h-10 '
    },
    {
        name: 'react',
        image: reactLogo,
        style: 'absolute sm:right-40 right-32  sm:top-5  top-5  sm:w-12 sm:h-12 w-11 h-10 '
    },
    {
        name: 'js',
        image: jsLogo,
        style: 'absolute sm:right-60 right-32  sm:bottom-5 bottom-24  sm:w-12 sm:h-12 w-10 h-10 '
    },
    {
        name: 'python',
        image: pythonLogo,
        style: 'absolute sm:right-16 right-8  sm:bottom-9 bottom-7  sm:w-12 sm:h-12 w-10 h-10 '
    },
    {
        name: 'vue',
        image: vueLogo,
        style: 'absolute sm:right-8  right-8  sm:top-24 top-24  sm:w-12 sm:h-12 w-10 h-10 '
    }


]



export default logoDetails;