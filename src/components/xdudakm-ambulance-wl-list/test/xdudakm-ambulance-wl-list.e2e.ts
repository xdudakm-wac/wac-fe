import { newE2EPage } from '@stencil/core/testing';

describe('xdudakm-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdudakm-ambulance-wl-list></xdudakm-ambulance-wl-list>');

    const element = await page.find('xdudakm-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
