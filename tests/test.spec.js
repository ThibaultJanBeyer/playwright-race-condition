import { test, expect } from '@playwright/test';

test.describe('test', () => {
  test('test', async ({ page }) => {
    await page.goto(`file://${process.cwd()}/tests/test.html`);
    await page.mouse.move(1, 1)
    await page.mouse.down()
    await page.mouse.move(500, 500, { steps: 10 })
    await page.mouse.up()
    const { up, down, move } = await page.evaluate(() => ({ up: window.up, down: window.down, move: window.move }))
    expect(move.length).toEqual(11)
    expect(up.length).toEqual(1)
    expect(down.length).toEqual(1)
  })
})
