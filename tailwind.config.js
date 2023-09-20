/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        colors: {
            'Black': '#111110',
            'Black/02': 'rgb(17 17 16 / 0.02)',
            'Dark': '#2F2F2E',
            'Grey': '#939393',
            'GreyLight': '#F2F2F4',
            'White': '#FFF',
            'Blue': '#158FFF',
            'BlueLight': '#D4DFFF',
            'Yellow': '#E3AD09',
            'YellowLight': '#F2C94C',
            'Green': '#3DB613',
            'BtnBorderGrey': '#484848'
        },
        fontFamily: {
            'sans': ['Lato', 'sans-serif'],
        },
        extend: {
            lineHeight: {
                '1.16': '1.16',
                '1.35': '1.35',
                '1.42': '1.42'
            },
            fontSize: {
                '4xl-reduced': '32px',
            },
            boxShadow: {
                'bannerShadow': '0px 66px 110px rgba(0, 0, 0, 0.05)',
            },
            translate: {
                '3p': '3px'
            },
            opacity: {
                '2': '0.02',
                '15': '0.15'
            },
            spacing: {
                '4.5': '18px',
                '7.5': '30px',
                '12.5': '50px',
                '14': '56px',
                '15': '60px',
                '18': '72px',
                '21': '84px',
                '22': '88px',
                '25': '100px',
                '27': '109px',
                '29': '115px',
                '30': '120px',
                '31.25': '125px',
                '33.5': '134px',
                '41': '165px',
                '70': '280px',
                '73.5': '294px',
                '110': '440px',
                'container-max': '1216px'
            },
            transitionDuration: {
                '0': '0ms',
                '2000': '2000ms',
            },
            animation: {
                'selectListAppear': 'selectListAppear 0.2s linear',
                'shimer': 'shimer 1.5s infinite',
                'spin-slow': 'spin 3s linear infinite',
                'lessBarAppear': 'lessBarAppear 300ms linear'
            },
            keyframes: {
                selectListAppear: {
                    '0%': { transform: 'scaleX(0.1);'},
                    '100%': {transform: 'scaleX(1)'}
                },
                shimer: {
                    '100%': { transform: 'translateX(100%)'}
                },
                lessBarAppear: {
                    '0%': {transform: 'translateX(100%)'},
                    '100%': {transform: 'translateX(0)'}
                }
            }
        },
    },
    plugins: [],
};
