import ReactImage from '../../images/svg-3.svg'
import ReactImage1 from '../../images/svg-5.svg'
import ReactImage2 from '../../images/svg-6.svg'



export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transaction with zero fees',
    description: 
        'Get accessto our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: ReactImage,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false    
};


export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: ReactImage1,
    alt: 'piggy',
    dark: false,
    primary: false,
    darkText: true,    
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Team',
    headline: 'Creating an account is extremely easy!',
    description: 
        "Get everything set up and ready in under 10 mins. All you need to do is add your inforation and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: true,
    img: ReactImage2,
    alt: 'Data',
    dark: false,
    primary: false,
    darkText: true    
};