import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Link } from 'react-router';

const Banner = () => {

    const slides = [
        {
            url: 'https://i.ibb.co/TM1qwYJ2/boots-6068160-1920.jpg'
        },
        {
            url: 'https://i.ibb.co/RGBcQNZk/volunteer-2654004-1920.jpg'
        },
        {
            url: 'https://i.ibb.co/B5hq6vPv/children-674513-1920.jpg'
        },
        {
            url: 'https://i.ibb.co/0yrBSCrB/volunteer-7788809-1920.jpg'
        }

    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? 3 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }
    return (
        <div className='flex justify-center p-10'>
            <div className='max-w-[1500px] w-full sm:aspect-[21/9] md:aspect-[16/7] lg:aspect-[16/6] relative group overflow-hidden'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full rounded-2xl bg-center bg-cover duration-500 relative flex items-center justify-center '>
                    <div className='relative text-center text-white px-4'>
                        <h2 className='text-4xl font-bold mb-4 drop-shadow-lg'>Be a Hero — Be a Volunteer Today</h2>
                        <p className='text-lg mb-6 drop-shadow-md'>
                            Give a hand to make a difference in your community 🌍
                        </p>
                        <button className='btn btn-primary'>Get Started</button>
                    </div>
                </div>


                {/* Left Arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactLeft onClick={prevSlide} size={30}></BsChevronCompactLeft>
                </div>
                {/* Right arrow */}
                <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                    <BsChevronCompactRight onClick={nextSlide} size={30}></BsChevronCompactRight>
                </div>
                <div className='flex top-4 justify-center py-2'>
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'>
                            <RxDotFilled></RxDotFilled>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Banner;