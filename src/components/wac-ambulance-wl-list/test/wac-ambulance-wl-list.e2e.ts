import { newE2EPage } from '@stencil/core/testing';

describe('wac-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wac-ambulance-wl-list></wac-ambulance-wl-list>');

    const element = await page.find('wac-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
