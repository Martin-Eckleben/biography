import { Ng2ViewDeclaration } from '@uirouter/angular'
import { PageThreeRowComponent } from '@component/page-three-row/page-three-row.component'
import { HeaderComponent } from '@component/header/header.component'
import { FooterComponent } from '@component/footer/footer.component'
import { FrontpageComponent } from '@component/frontpage/frontpage.component'

export const uiRouterStates = [
  {
    name: 'bio',
    abstract: true,
    views: {
      main: { component: PageThreeRowComponent } as Ng2ViewDeclaration,
    },
  },

  {
    name: 'bio.main',
    abstract: true,
    views: {
      header: { component: HeaderComponent } as Ng2ViewDeclaration,
      footer: { component: FooterComponent } as Ng2ViewDeclaration,
    },
  },

  {
    name: 'bio.main.home',
    url: '/home',
    views: {
      'content@frontend': { component: FrontpageComponent } as Ng2ViewDeclaration,
    },
    data: {},
  },
}