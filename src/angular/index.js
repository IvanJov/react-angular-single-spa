import 'zone.js'
import 'reflect-metadata'
import singleSpaAngular from 'single-spa-angular2'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import mainModule from './main-module.ts'
import { Router } from '@angular/router'

const domElementGetter = () => {
  let el = document.getElementById('angular')
  if (!el) {
    el = document.createElement('div')
    el.id = 'angular'
    document.body.appendChild(el)
  }

  return el
}

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<AngularApp />`,
  Router,
})

export const bootstrap = props => ngLifecycles.bootstrap(props)

export const mount = props => ngLifecycles.mount(props)

export const unmount = props => ngLifecycles.unmount(props)
