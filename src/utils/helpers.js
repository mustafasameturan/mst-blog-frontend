export function toggleMobileMenu(ref) {
    document.body.classList.toggle("max-h-screen");
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("relative");
    ref.current.classList.toggle("opacity-100");
    ref.current.classList.toggle("pointer-events-auto");
}

export const decodeToken = (token) => {
    //return jwtDecode(token);
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}