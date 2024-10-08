import '@vue/runtime-core'

export {}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    AboutView: typeof import('./src/components/AboutView.vue')['default']
    HelloWorld: typeof import('./src/components/HelloWorld.vue')['default']
    Home: typeof import('./src/components/home/index.vue')['default']
    IconCommunity: typeof import('./src/components/icons/IconCommunity.vue')['default']
    IconDocumentation: typeof import('./src/components/icons/IconDocumentation.vue')['default']
    IconEcosystem: typeof import('./src/components/icons/IconEcosystem.vue')['default']
    IconSupport: typeof import('./src/components/icons/IconSupport.vue')['default']
    IconTooling: typeof import('./src/components/icons/IconTooling.vue')['default']
    RouterLink: typeof import('vue-router')['RouterLink']
    RouterView: typeof import('vue-router')['RouterView']
    TheWelcome: typeof import('./src/components/TheWelcome.vue')['default']
    TopSwipe: typeof import('./src/components/TopSwipe.vue')['default']
    VanImage: typeof import('vant/es')['Image']
    WelcomeItem: typeof import('./src/components/WelcomeItem.vue')['default']
  }
}
