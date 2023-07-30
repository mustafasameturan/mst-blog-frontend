export const apperance = Object.freeze({
    'dark': 'dark',
    'light': 'light',
    'default': 'default'
})

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