import { mount } from '@vue/test-utils'
import Navbar from '@/components/core/navbar/NavBar.vue'
import { vi } from 'vitest'
import { useRoute } from 'vue-router'
import router from '@/router/router'

describe('Navbar', () => {
  vi.mock('vue-router', async () => {
    const actual: any = await vi.importActual('vue-router')

    return {
      ...actual,
      useRoute: vi.fn(() => ({ name: 'Watches' })),
      useRouter: vi.fn()
    }
  })

  vi.mocked(useRoute).mockReturnValue(router.currentRoute.value)

  const wrapper = mount(Navbar, {
    global: {
      stubs: ['router-link', 'router-view']
    }
  })

  it('Watches active link renders properly', () => {
    const firstLink = wrapper.findAll('[data-test="link"]')[0]

    expect(firstLink.text()).toContain('Watches')
    expect(firstLink.classes().includes('active-route')).toBeTruthy()
  })
})
