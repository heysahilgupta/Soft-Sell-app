import React from 'react'
import logo from '../images/bglogo.svg'

const Footer = () => {
  return (
    <footer class="px-6 bg-[#111827] md:px-16 lg:px-24 xl:px-32 w-full">
    <div class="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
        
        <div class="max-w-96">
            <img className='h-8' src={logo} alt="" />
            <p class="mt-6 text-sm text-[#9ca3af]">
            SoftSell helps businesses recover value from unused software licenses through our secure, efficient marketplace platform.
            </p>
            <div class="flex items-center gap-2 mt-3">
                <a  href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.167 2.5a9.1 9.1 0 0 1-2.617 1.275 3.733 3.733 0 0 0-6.55 2.5v.833a8.88 8.88 0 0 1-7.5-3.775s-3.333 7.5 4.167 10.833a9.7 9.7 0 0 1-5.834 1.667C8.333 20 17.5 15.833 17.5 6.25q0-.35-.067-.692A6.43 6.43 0 0 0 19.167 2.5" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
                <a href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="#2563EB" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </a>
            </div>
        </div>

        <div class="w-1/2 flex flex-wrap md:flex-nowrap justify-between">
            <div>
                <h2 class="font-bold text-white mb-5">Quick Links</h2>
                <ul class="text-sm text-[#9ca3af] space-y-2 list-none">
                    <li className='hover:text-white'><a href="#">How It Works</a></li>
                    <li className='hover:text-white'><a href="#">Why Choose Us</a></li>
                    <li className='hover:text-white'><a href="#">Testimonials</a></li>
                    <li className='hover:text-white'><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h2 class="font-bold mb-5 text-bold text-white">Contact</h2>
                <div class="text-sm  text-[#9ca3af] space-y-2">
                    <p>123 Tech Lane, San Francisco, CA 94107</p>
                    <p>info@softsell.com</p>
                    <p>(800) 555-1234</p>
                </div>
            </div>
        </div>

    </div>
    <p class="py-4 text-center text-xs md:text-sm text-gray-500">
        Copyright 2024 © Company name. All Right Reserved.
    </p>
</footer>
  )
}

export default Footer
