import { shallowMount } from '@vue/test-utils'
import NavBarMobile from '@/components/core/navbar/NavBarMobile.vue'

describe('NavBarMobile', () => {
  const wrapper = shallowMount(NavBarMobile)

  it('Burger button renders properly', () => {
    expect((wrapper.vm as any).isOpen).toBe(false)
    const burgerBtn = wrapper.find('[data-test="burger"]')
    expect(burgerBtn.exists()).toBeTruthy()
  })

  it('isOpen ref change', async () => {
    await wrapper.find('[data-test="burger"]').trigger('click')
    expect((wrapper.vm as any).isOpen).toBe(true)
  })
})
