import { newE2EPage } from '@stencil/core/testing';

describe('wac-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wac-ambulance-wl-editor></wac-ambulance-wl-editor>');

    const element = await page.find('wac-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
