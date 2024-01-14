export function getColorByPostCategory(postCategory){
    switch (postCategory) {
        case '.NET Core':
        case 'C#':
            return 'bg-blue-light text-blue';
        case 'Java':
        case 'Spring Boot':
            return 'bg-green-light text-green';
        case 'JavaScript':
        case 'ReactJS':
        case 'Redux':
            return 'bg-yellow-light text-yellow-dark';
        case 'Tailwind CSS':
            return 'bg-indigo-500 text-white';
        default:
            return 'bg-grey-light text-blue-dark';
    }
}