/* global fbq */
window.privacyChoicesConfiguration = {
    style: {
        buttonBackgroundColour: '#154691',
        buttonTextColour: '#ffffff',
        toggleBackgroundColour: '#154691',
        toggleTextColour: '#ffffff',
        promptBackgroundColour: '#ffffff',
        promptTextColour: '#154691',
        settingsBackgroundColour: '#ffffff',
        settingsTextColour: '#154691'
    },
    policy: {
        display: true,
        uri: ''
    },
    necessary: {
        handle() {}
    },
    categories: [
        {
            storageKey: 'analytics',
            title: 'Analytics cookie',
            description: `When you visit our website we use Google Analytics and to collect information on your journey through the website. This information is anonymous and we do not use it to identify you. Google provides a Google Analytics opt-out add on for all popular browsers`,
            handleAccept() {
                window.gtag('consent', 'update', {
                    analytics_storage: 'granted'
                });
            },
            handleReject() {
                window.gtag('consent', 'update', {
                    analytics_storage: 'denied'
                });
            }
        },
        {
            storageKey: 'promotional',
            title: 'Promotional cookies',
            description:
                'We use GoogleAds and Facebook Pixel to help us to understand the performance of our promotions across third party platforms.',
            handleAccept() {
                window.gtag('consent', 'update', {
                    ad_storage: 'granted'
                });
                fbq('consent', 'grant');
            },
            handleReject() {
                window.gtag('consent', 'update', {
                    ad_storage: 'denied'
                });
                fbq('consent', 'revoke');
            }
        }
    ]
};
