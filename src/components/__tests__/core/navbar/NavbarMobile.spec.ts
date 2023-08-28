import { mount, shallowMount } from '@vue/test-utils'
import NavBarMobile from '@/components/core/navbar/NavBarMobile.vue'
import { beforeEach, vi } from 'vitest'
import router from '@/router/router'
import { useRoute } from 'vue-router'

describe('NavBarMobile', () => {
  vi.mock('vue-router', async () => {
    const actual: any = await vi.importActual('vue-router')

    return {
      ...actual,
      useRoute: vi.fn(() => ({ name: 'Watches' })),
      useRouter: vi.fn()
    }
  })

  vi.mocked(useRoute).mockReturnValue(router.currentRoute.value)
  const wrapper = mount(NavBarMobile)

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
