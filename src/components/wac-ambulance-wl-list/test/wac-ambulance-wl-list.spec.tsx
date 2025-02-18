import { newSpecPage } from '@stencil/core/testing';
import { WacAmbulanceWlList } from '../wac-ambulance-wl-list';

describe('wac-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WacAmbulanceWlList],
      html: `<wac-ambulance-wl-list></wac-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <wac-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wac-ambulance-wl-list>
    `);
  });
});
