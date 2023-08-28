import { mount, RouterLinkStub } from '@vue/test-utils'
import NavBarLink from '@/components/core/navbar/NavBarLink.vue'

describe('NavBarLink', () => {
  const wrapper = mount(NavBarLink, {
    props: { activeRoute: true },
    global: {
      stubs: { RouterLink: RouterLinkStub }
    }
  })

  it('Watches active link renders properly', () => {
    expect(wrapper.find('[data-test="link"]').classes()).toContain('active-route')
  })
})
