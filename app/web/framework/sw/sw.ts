'use strict';

class FrameServiceWorker {
  private options: any;
  static register(name : string, options : any) {
    return new FrameServiceWorker(options).register(name);
  }

  constructor(options: any) {
    this.options = Object.assign({}, {
      manifestUrl: '/public/sw-manifest.json'
    }, options);
  }
  fetch(url: string, options?: any) {
    return fetch(url, Object.assign({
      method: 'GET',
      mode: 'no-cors',
      cache: 'default'
    }, options));
  }

  fetchServiceWorkerManifest(manifestUrl? : string): any {
    return this.fetch(manifestUrl || this.options.manifestUrl).then(res => {
      return res.json();
    }).catch(err => {
      this.report({ msg: `fetch manifest error:${err.toString()}` });
      return null;
    });
  }

  getServiceWorkerUrl(name : string, manifest : any) : string {
    name = /\.js/.test(name) ? name : `${name}.js`;
    const prefix = manifest.config && manifest.config.prefix;
    const babel = prefix ? `${prefix}-${name}` : name;
    return manifest[babel] || babel;
  }

  register(name): void {
    if (navigator.serviceWorker) {
      this.fetchServiceWorkerManifest().then(manifest =>{
        if(manifest) {
          const swUrl = this.getServiceWorkerUrl(name, manifest);
          navigator.serviceWorker.register(swUrl);
        }
      });
    } else {
      this.report({ msg: 'the browser is not support service worker' });
    }
  }

  report(info) {
    const msg = Object.assign({}, {
      url: location.href, 
      useAgent: navigator.userAgent.toString()
    }, info);
    return this.options.report && this.options.report(msg);
  }
}

export default FrameServiceWorker;