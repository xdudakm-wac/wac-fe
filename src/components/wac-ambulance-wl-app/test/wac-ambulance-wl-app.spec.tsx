import { newSpecPage } from '@stencil/core/testing';
import { WacAmbulanceWlApp } from '../wac-ambulance-wl-app';

  describe('wac-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [WacAmbulanceWlApp],
          html: `<wac-ambulance-wl-app base-path="/"></wac-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("wac-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [WacAmbulanceWlApp],
          html: `<wac-ambulance-wl-app base-path="/ambulance-wl/"></wac-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("wac-ambulance-wl-list");
  });
});
