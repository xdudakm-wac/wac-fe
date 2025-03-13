import { newE2EPage } from '@stencil/core/testing';

describe('wac-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wac-ambulance-wl-app></wac-ambulance-wl-app>');

    const element = await page.find('wac-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
