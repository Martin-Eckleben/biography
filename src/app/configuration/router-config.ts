import { EventEmitter } from '@angular/core'
import { UIRouter, Transition, Ng2ViewDeclaration, TransitionService } from '@uirouter/angular'
import { PageThreeRowComponent } from '@component/page-three-row/page-three-row.component'
import { HeaderComponent } from '@component/header/header.component'
import { FooterComponent } from '@component/footer/footer.component'
import { FrontPageComponent } from '@component/front-page/front-page.component'
import { MarketplaceComponent } from '@component/marketplace/marketplace.component'
import { AdvertDetailComponent } from '@component/marketplace/advert-detail/advert-detail.component'
import { CreateAdvertComponent } from '@component/marketplace/create-advert/create-advert.component'
import { BlogComponent } from '@component/blog/blog/blog.component'
import { RegistrationConfirmComponent } from '@component/registration-confirm/registration-confirm.component'
import { LoginComponent } from '@component/header/login/login.component'
import { ForumComponent } from '@component/forum/forum.component'
import { SsoRegistrationComponent } from '@component/sso-registration/sso-registration.component'
import { ProfileAboutComponent } from '@component/profile/profile-about/profile-about.component'
import { ProfileBoniComponent } from '@component/profile/profile-boni/profile-boni.component'
import { BookmarksComponent } from '@component/profile/bookmarks/bookmarks.component'
import { BusinessComponent } from '@component/profile/business/business.component'
import { MeetingPointComponent } from '@component/profile/meeting-point/meeting-point.component'
import { BlogCreateComponent } from '@component/blog/blog-create/blog-create.component'
import { BlogDetailComponent } from '@component/blog/blog-detail/blog-detail.component'
import { WikiComponent } from '@component/wiki/wiki.component'
import { WikiCreateComponent } from '@component/wiki-create/wiki-create.component'
import { WikiDetailComponent } from '@component/wiki-detail/wiki-detail.component'
import { MyContentComponent } from '@component/profile/my-content/my-content.component'
import { ProfileExternalComponent } from '@component/profile/profile-external/profile-external.component'
import { BusinessprofileExternalComponent } from '@component/profile/businessprofile-external/businessprofile-external.component'
import { ProfileSettingsComponent } from '@component/profile/profile-settings/profile-settings.component'
import { VideoComponent } from '@component/video/video/video.component'
import { JobComponent } from '@component/jobs/job/job.component'
import { PartnerComponent } from '@component/partner/partner.component'
import { AboutUsComponent } from '@component/peripherals/about-us/about-us.component'
import { ImpressumComponent } from '@component/peripherals/impressum/impressum.component'
import { PrivacyComponent } from '@component/peripherals/privacy/privacy.component'
import { AgbComponent } from '@component/peripherals/agb/agb.component'
import { CareerComponent } from '@component/peripherals/career/career.component'
import { ContactComponent } from '@component/peripherals/contact/contact.component'
import { HelpComponent } from '../component/profile/help/help.component'
import { UserService } from '@service/user/user.service'
import { BswalsComponent } from '@component/bswals/bswals.component'
import { JobCreateComponent } from '@component/jobs/job-create/job-create.component'
import { JobDetailComponent } from '@component/jobs/job-detail/job-detail.component'
import { BoniFaqComponent } from '@component/boni-faq/boni-faq.component'
import { ResetPasswordComponent } from '@component/reset-password/reset-password.component'

export let authGuardEvent: EventEmitter<void> = new EventEmitter<void>()

export function requiresAuthHook(transitionService: TransitionService): void {
  // Matches if the destination state's data property has a truthy 'requiresAuth' property
  const requiresAuthCriteria = {
    to: state =>
      typeof state.data != 'undefined' && state.data && state.data.requiresAuth != 'undefined' && state.data.requiresAuth === true,
  }

  // Function that returns a redirect for the current transition to the login state
  // if the user is not currently authenticated (according to the AuthService)
  const redirectToHome = transition => {
    const userService: UserService = transition.injector().get(UserService)
    const state = transition.router.stateService

    if (!userService.getAccessToken() || userService.getAccessToken() == '') {
      console.log('auth guarded')
      authGuardEvent.emit()
      return state.target('frontend.app.home')
    }
  }

  // Register the "requires auth" hook with the TransitionsService
  transitionService.onBefore(requiresAuthCriteria, redirectToHome, { priority: 10 })
}

export function uiRouterConfig(router: UIRouter) {
  // const resolver = injector.get(ComponentFactoryResolver)

  // const classesMap: { [key: string]: any } = {
  //   DynamicComponentComponent: DynamicComponentComponent,
  //   HeaderComponent: HeaderComponent,
  // }

  // const globalStates = (<any>window).globalStates
  // globalStates.forEach((gState: any) => {
  //   for (const view in gState.views) {
  //     if (Object.prototype.hasOwnProperty.call(gState.views, view)) {
  //       const componentFactory = resolver.resolveComponentFactory(classesMap[gState.views[view].component])
  //       gState.views[view].component = componentFactory.componentType
  //     }
  //   }
  //   if (module.states !== undefined) {
  //     module.states.push(gState)
  //   }
  // })

  const transitionService = router.transitionService

  requiresAuthHook(transitionService)

  router.urlService.rules.otherwise({ state: 'frontend.app.home' })
}

export function loadTransitionParams(trans: Transition): object {
  // console.log("loadTransitionParams",trans.params())
  return trans.params()
}

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
      'content@frontend': { component: FrontPageComponent } as Ng2ViewDeclaration,
    },
    data: {
      title: 'Zimmerer-Treffpunkt',
      titleMobileOverride: 'Der Treffpunkt für Zimmerer im Internet',
      mobile_headerTextWhiteBG: true,
      icon: 'dashboard',
      headline:
        'Der Zimmerer-Treffpunkt ist die Plattform, auf der Zimmerer sich Online treffen, austauschen und informieren. Vom Azubi bis zum Meister ist jeder willkommen.',
      // sliderimage: 'slider1_Alexander_u_Rosemarie_Ahrenholz_1.jpg',
      sliderimage: 'slider2_IMG_5614.JPG',
      breadcrumb: false,
    },
  },
}