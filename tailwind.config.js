const { url } = require('inspector');
const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      'headerMobile': '24px',
      'header': '30px',
      'newsArticalHeader':'1.2rem',
      'pdfText':'20px',
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    screens: {
      headerMd: "1023px",
      headerXl: '1280px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        // 'heroImage': "url('/banner.png')",
        'heroVedio':"url('/vedio/homepage.mp4')",
        'bgAbout':"url('/bgAbout.svg')",
        'abouteBanner':"url('/aboutBanner.jpg')",
        'lithiumBanner':"url('/lithumImage.jpg')",
        'projectBanner':"url('/project.jpg')",
        'contactBanner':"url('/cBanner.jpg')",
        'investorsBanner':"url('/investorsBanner.jpg')",
        'bgInformation':"url('/bgInfomation.svg')",
        'newsBanner':"url('/newsBanner.png')",
        'ourProjectBg':"url('/ourProjectBg.png')",
        "login":"url('/login.png')"
      }
    },
    colors:{
      primaryColor:'#F18628',
      white:'#fff',
      black:'#000',
      bgOpacity:'#00000069',
      secondaryTextColor: '#FFCFAD',
      bgColor:'#25272A',
      bgLight:'#3B3D40',
      textGray:'#AFB2B8',
      bgComponent:'#FFF8F3',
      informationText:'#616366',
      informationBorder:'#2f313480',
      tableHeadeBg:"#FBB170",
      borderright:'#FFFBFB',
      newsText:'#CFCFCF',
      marketSidebar:'#FFE5D3',
      subtitle:'#FF8832',
      desc:'#424040',
      newsItemBg: '#353535',
      newsItemDate:'#F78222',
      mapmarkbg:'#0000007a',
      textGary:'#EEEEEE',
      wwhColor:'#3E3D3D',
      kumItemTitle:'#FFDCC3',
      youtubeBg:'#25272A',
      projectGrayBg: '#F5F5F5',
      mobileDropdownBg: '#F0D3B9',
      primaryLight: '#f7822280',
      addEditBg:'#FFF8F2',
      //dark
      darkTheme:'#3B3D40'
     
    },
    fontFamily:{
      hind:['Hind']
    }
  },
  plugins: [],
}
