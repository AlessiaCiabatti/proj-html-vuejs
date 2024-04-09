import { reactive } from "vue"

export const store = reactive({
  // -----> ARRAY NAV
  arrayNav: [
    {
      text: 'Home',
      href: '#'
    },
    {
      text: 'Pages',
      href: '#'
    },
    {
      text: 'Courses',
      href: '#'
    },
    {
      text: 'Features',
      href: '#'
    },
    {
      text: 'Blog',
      href: '#'
    },
    {
      text: 'Shop',
      href: '#'
    },

  ],

  // -----> ARRAY FOOTER
  arrayFooter: [
    {
      address: [
        {
          text: 'Shop382 NE 191st St # 87394 Miami, FL 33179-3899',
          href: '#'
        },
        {
          text: '+1(305) 547-9909 (9AM - 5PM EST, Monday - Friday)',
          href: '#'
        },
        {
          text: 'support@coach.com',
          href: '#'
        },
      ]
    },
    {
      icon: [
        {
          text: 'fa-brands fa-square-facebook',
          href: '#'
        },
        {
          text: 'fa-brands fa-twitter',
          href: '#'
        },
        {
          text: 'fa-brands fa-instagram',
          href: '#'
        },
        {
          text: 'fa-brands fa-linkedin',
          href: '#'
        },
      ]
    },
    {
      explore: [
        {
          text: 'Start here',
          href: '#'
        },
        {
          text: 'Blog',
          href: '#'
        },
        {
          text: 'About us',
          href: '#'
        },
      ]
    },
    {
      items: [
        {
          text: 'Success story',
          href: '#'
        },
        {
          text: 'Courses',
          href: '#'
        },
        {
          text: 'Contact us',
          href: '#'
        },
      ]
    },
    {
      information: [
        {
          text: 'Membership',
          href: '#'
        },
        {
          text: 'Purchase guide',
          href: '#'
        },
        {
          text: 'Privacy policy',
          href: '#'
        },
        {
          text: 'Terms of service',
          href: '#'
        },
      ]
    },
  ],

  // -----> ARRAY ICONE FOOTER


})