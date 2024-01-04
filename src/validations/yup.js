import * as Yup from "yup";

Yup.setLocale({
    mixed: {
        required: 'Bu alanı doldurmanız gerekiyor.'
    },
    string: {
        email: 'Geçerli bir e-posta adresi girin.',
        min: 'Bu alan minimum ${min} karakter olmalıdır.',
        max: 'Bu alan maksimum ${max} karakter olmalıdır.',
        url: 'Geçerli bir URL girmelisiniz.'
    },
    array: {
        min: 'Minimum ${min} seçim  yapılmalıdır.'
    },
    boolean: {
        oneOf: 'Bu alanı işaretlemeniz gerekiyor.'
    }
})

export default Yup;