import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://www.google.com/`;

test('My first test', async t => {
    await t
        .click(Selector('#tsf').find('[name="q"]'))
        .typeText(Selector('#tsf').find('[name="q"]'), 'google')
        .click(Selector('.VlcLAe').find('.gNO89b[name="btnK"]'))
        .expect(Selector("#resultStats").exists).ok();
});