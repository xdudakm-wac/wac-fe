import { newE2EPage } from '@stencil/core/testing';

describe('xdudakm-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xdudakm-ambulance-wl-editor></xdudakm-ambulance-wl-editor>');

    const element = await page.find('xdudakm-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
