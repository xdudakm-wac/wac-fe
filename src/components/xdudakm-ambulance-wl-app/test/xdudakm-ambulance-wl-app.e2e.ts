import { newE2EPage } from '@stencil/core/testing';

describe('xdudakm-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdudakm-ambulance-wl-app></xdudakm-ambulance-wl-app>');

    const element = await page.find('xdudakm-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
