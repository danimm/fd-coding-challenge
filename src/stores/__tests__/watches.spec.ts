import { setActivePinia, createPinia } from 'pinia'
import { useWatchesStore } from '@/stores/watches'

const mockProduct = {
  id: '63b83f1f51ce37b676d1ff19',
  category: 'Piaget',
  title: 'Piaget Altiplano Ultimate 910P',
  subTitle: 'Altiplano',
  sku: 'GOA535',
  shortDescription:
    'The thinnest hand-wound mechanical watches in the world. Manufacture Piaget 910P ultra-thin, hand-wound mechanical movement.',
  isActive: true,
  medias: [
    {
      targetAttr: 'mainImage',
      path: 'ultimate.png',
      sortOrder: 1
    },
    {
      targetAttr: 'sliderImage',
      path: 'img01.png',
      sortOrder: 1
    },
    {
      targetAttr: 'gallery',
      path: 'ultimate.png',
      sortOrder: 1
    },
    {
      targetAttr: 'gallery',
      path: 'ultimate-01.png',
      sortOrder: 5
    },
    {
      targetAttr: 'gallery',
      path: 'ultimate-02.png',
      sortOrder: 4
    },
    {
      targetAttr: 'detail-1',
      path: 'product-detail.png',
      sortOrder: 1
    },
    {
      targetAttr: 'detail-2',
      path: 'specification.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon1',
      path: 'icon-1.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon2',
      path: 'icon-2.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon3',
      path: 'icon-3.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon4',
      path: 'icon-4.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon5',
      path: 'icon-5.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon6',
      path: 'icon-6.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon7',
      path: 'icon-7.png',
      sortOrder: 1
    },
    {
      targetAttr: 'icon8',
      path: 'icon-8.png',
      sortOrder: 1
    }
  ],
  productDetails: {
    title: 'Piaget Altiplano Ultimate 910P',
    data: [
      {
        title: 'Brand',
        text: 'Piaget',
        iconTarget: 'icon1',
        sortOrder: 1
      },
      {
        title: 'Warranty',
        text: '2 years',
        iconTarget: 'icon2',
        sortOrder: 2
      },
      {
        title: 'Origin',
        text: 'Switzerland',
        iconTarget: 'icon6',
        sortOrder: 6
      },
      {
        title: 'Collection',
        text: '60th Anniversary',
        iconTarget: 'icon3',
        sortOrder: 3
      },
      {
        title: 'Movement',
        text: 'Automatic Movement',
        iconTarget: 'icon5',
        sortOrder: 5
      },
      {
        title: 'Gender',
        text: "For men's",
        iconTarget: 'icon4',
        sortOrder: 4
      }
    ]
  },
  productSpecifications: {
    title: 'Product Characteristics',
    data: [
      {
        title: 'Metal Weight',
        text: '32,14',
        iconTarget: 'icon3',
        sortOrder: 3
      },
      {
        title: 'Strape Type',
        text: 'Alligator',
        iconTarget: 'icon5',
        sortOrder: 5
      },
      {
        title: 'Case Shape',
        text: 'Round',
        iconTarget: 'icon2',
        sortOrder: 2
      },
      {
        title: 'Water Resistance',
        text: '30 M / 02 ATM',
        iconTarget: 'icon8',
        sortOrder: 8
      },
      {
        title: 'Strap Color',
        text: 'Black / Brown',
        iconTarget: 'icon7',
        sortOrder: 7
      },
      {
        title: 'Case Diameter',
        text: '38 mm',
        iconTarget: 'icon4',
        sortOrder: 4
      },
      {
        title: 'Metal',
        text: 'Rose gold / silver',
        iconTarget: 'icon1',
        sortOrder: 1
      },
      {
        title: 'Case Thickness',
        text: '3.45 mm',
        iconTarget: 'icon6',
        sortOrder: 6
      }
    ]
  },
  relatedProducts: ['GOA399', 'GOA326', 'GOA573', 'GOA735', 'GOA446', 'GOA261', 'GOA374']
}

const mockPrice = {
  id: '63b843f81c2c85021d6ab291',
  sku: 'GOA535',
  isActive: true,
  price: 53684.7,
  priceFormatted: "53'684.70 CHF"
}

describe('Watches Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should be an empty initial state', () => {
    const watchesStore = useWatchesStore()

    expect(watchesStore.watches).toStrictEqual([])
    expect(watchesStore.prices).toStrictEqual([])
  })

  it('should update the state', () => {
    const watchesStore = useWatchesStore()

    watchesStore.setWatches([mockProduct])
    expect(watchesStore.watches.length).toBe(1)

    watchesStore.setPrices([mockPrice])

    watchesStore.$reset()
    expect(watchesStore.watches.length).toBe(0)
    expect(watchesStore.prices.length).toBe(0)
  })
})
