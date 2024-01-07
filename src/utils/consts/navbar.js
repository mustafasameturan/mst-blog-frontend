export const navbarMenu = (t) => [
    {
        "path": "/",
        "title": t('navbar.home')
    },
    {
        "path": "/blog",
        "title": t('navbar.blog')
    },
    {
        "path": "/uses",
        "title": t('navbar.uses')
    },
    {
        "path": "/contact",
        "title": t('navbar.contact')
    }
];

export const navbarAdminLoginMenu = (t) => [
    {
        "path": "/admin",
        "title": t('navbar_admin.login')
    }
];

export const navbarAdminMenu = (t) => [
    {
        "path": "/admin/create-post",
        "title": t('navbar_admin.create_post')
    }
];