import { mount } from '@vue/test-utils'
import FooterComponent from '@/components/core/footer/FooterComponent.vue'

describe('FooterComponent', () => {
  const wrapper = mount(FooterComponent)

  it('Address renders properly', () => {
    expect(wrapper.find('[data-test="address"]').text()).toContain('Walchestrasse 9')
  })

  it('ZIP renders properly', () => {
    expect(wrapper.find('[data-test="zip"]').text()).toContain('8006 Zürich')
  })

  it('Tel renders properly', () => {
    expect(wrapper.find('[data-test="tel"]').text()).toContain('+ 41 (0) 10 20 30 40')
  })

  it('Fax renders properly', () => {
    expect(wrapper.find('[data-test="fax"]').text()).toContain('+ 41 (0) 50 60 70 80')
  })

  it('Email renders properly', () => {
    expect(wrapper.find('[data-test="email"]').text()).toContain('contact@thebrand.com')
  })
})
