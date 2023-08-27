import { mount } from '@vue/test-utils'
import Navbar from '@/components/core/navbar/NavBar.vue'

describe('Navbar', () => {
  const wrapper = mount(Navbar)

  it('Watches active link renders properly', () => {
    const firstLink = wrapper.findAll('[data-test="navbar-link"]')[0]

    expect(firstLink.text()).toContain('Watches')
    expect(firstLink.classes().includes('active-route')).toBeTruthy()
  })
})
