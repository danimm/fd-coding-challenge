import { mount } from '@vue/test-utils'
import SliderCard from '@/components/sections/Carousel/SliderCard.vue'

describe('SliderCard', () => {
  const props = {
    category: 'Rolex',
    subTitle: 'Ultimate Watch',
    sku: 'SKU',
    mainImage: 'ultimate.png',
    priceFormatted: "CHF 20'000"
  }

  const wrapper = mount(SliderCard, { props })

  it('renders category properly', () => {
    expect(wrapper.find('[data-test="category"]').text()).toContain(props.category)
  })

  it('renders subTitle properly', () => {
    expect(wrapper.find('[data-test="subTitle"]').text()).toContain(props.subTitle)
  })

  it('renders sku properly', () => {
    expect(wrapper.find('[data-test="sku"]').text()).toContain(props.sku)
  })

  it('renders priceFormatted properly', () => {
    expect(wrapper.find('[data-test="priceFormatted"]').text()).toContain(props.priceFormatted)
  })
})
