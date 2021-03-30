import {MenuEntry} from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://defizens.com'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Restaurants',
    icon: 'TakoyakiIcon',
    href: 'https://defizens.com/restaurants',
  },
  {
    label: 'Stands',
    icon: 'PoolIcon',
    href: 'https://defizens.com/stands',
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/',
      },
      //  {
      //  label: 'BscScan',
      //  href: 'https://bscscan.com/address/',
      //  },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/goose-finance',
      // },
      // // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/goose-finance/',
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ZENSDefi/',
      },
    //  {
    //    label: 'Docs',
    //    href: 'https://docs.takoyakidefi.com',
    //  },
    //  {
     //   label: 'Blog',
    //    href: 'https://medium.com/@takoyakidefi',
    //  },
    ],
  },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
  //
 // {
 //   label: 'Road Map',
  //  icon: 'RoadmapIcon',
  //  href: 'https://docs.takoyakidefi.com/road-map',
 // },
 // {
 //   label: 'Audit by TechRate',
 //   icon: 'AuditIcon',
 //   href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/Takoyaki%20Finance.pdf',
 // },
]

export default config
