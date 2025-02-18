import { newSpecPage } from '@stencil/core/testing';
import { WacAmbulanceWlList } from '../wac-ambulance-wl-list';

describe('wac-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WacAmbulanceWlList],
      html: `<wac-ambulance-wl-list></wac-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as PfxAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
