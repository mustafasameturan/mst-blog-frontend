export const apperance = Object.freeze({
    'dark': 'dark',
    'light': 'light',
    'default': 'default'
})

export const languages = [
    {
        key: 'tr',
        value: 'Türkçe'
    },
    {
        key: 'en',
        value: 'English'
    }
]

export const getApperanceIcon = (key, colorScheme = false )=> {
    switch(key){
        case 'default':
            if(colorScheme === 'light'){
                return 'bxs-sun'
            } else {
                return 'bxs-moon'
            }            
        case 'light': 
            return 'bxs-sun'
        case 'dark':
            return 'bx-moon'
    }
}

export const getLanguageIcon = (key) => {
    switch(key){
        case 'tr':
            return '/svg/tr.svg'
        case 'en':
            return '/svg/en.svg'
    }
}

export const getLanguageKey = (key) => {
    switch(key){
        case 'tr':
            return 'en'
        case 'en':
            return 'tr'
    }
}