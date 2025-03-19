import { newSpecPage } from '@stencil/core/testing';
import { XdudakmAmbulanceWlApp } from '../xdudakm-ambulance-wl-app';

  describe('xdudakm-ambulance-wl-app', () => {

    it('renders editor', async () => {
      const page = await newSpecPage({
        url: `http://localhost/entry/@new`,
        components: [XdudakmAmbulanceWlApp],
          html: `<xdudakm-ambulance-wl-app base-path="/"></xdudakm-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("xdudakm-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
        components: [XdudakmAmbulanceWlApp],
          html: `<xdudakm-ambulance-wl-app base-path="/ambulance-wl/"></xdudakm-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("xdudakm-ambulance-wl-list");
  });
});
