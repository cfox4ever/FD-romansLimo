const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: '/test',
                component: () =>
                    import ('pages/test.vue')
            },
            {
                path: '/',
                component: () =>
                    import ('pages/Home.vue')
            },
            {
                path: '/getaquote',
                component: () =>
                    import ('pages/GetQuote.vue')
            },
            {
                path: '/services',
                component: () =>
                    import ('pages/Services.vue')
            },
            {
                path: '/fleet',
                component: () =>
                    import ('pages/Fleet.vue')
            },
            {
                path: '/testimonials',
                component: () =>
                    import ('pages/Testimonials.vue')
            },
            {
                path: '/login',
                component: () =>
                    import ('pages/Login.vue')
            },
            {
                path: '/register',
                component: () =>
                    import ('pages/Register.vue')
            },
            {
                path: '/corporate',
                component: () =>
                    import ('pages/Corp.vue')
            },
            {
                path: '/about',
                component: () =>
                    import ('pages/About.vue')
            },
            {
                path: '/faq',
                component: () =>
                    import ('pages/Faq.vue')
            },
            {
                path: '/contactus',
                component: () =>
                    import ('pages/ContactUs.vue')
            },
            {
                path: '/privacy-policy',
                component: () =>
                    import ('pages/PrivacyPolicy.vue')
            },
            {
                path: '/booking',
                component: () =>
                    import ('pages/Booking.vue')
            }


        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '/:catchAll(.*)*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes