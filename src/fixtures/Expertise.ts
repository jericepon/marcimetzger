import itemImage1 from '../assets/sections/get_it_sold_1.webp';
import itemImage2 from '../assets/sections/get_it_sold_2.webp';
import itemImage3 from '../assets/sections/get_it_sold_3.webp';
import type { FeatureItem } from '../components/ExpertiseSection/FeatureItem';

type Item = FeatureItem

export const expertiseData: Item[] = [
  {
    id: crypto.randomUUID(),
    title: 'Top Residential Sales Last 5 Years',
    description: 'We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market.Our clients deserve our best, & we want to make sure our best is better every year.',
    imageSrc: itemImage1,
    imageAlt: 'Top Residential Sales Last 5 Years'
  },
  {
    id: crypto.randomUUID(),
    title: 'Don\'t Just List it...',
    description: 'Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.',
    imageSrc: itemImage2,
    imageAlt: 'Don\'t Just List it...'
  },
  {
    id: crypto.randomUUID(),
    title: 'Guide to Buyers',
    description: 'Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!',
    imageSrc: itemImage3,
    imageAlt: 'Guide to Buyers'
  },
]
