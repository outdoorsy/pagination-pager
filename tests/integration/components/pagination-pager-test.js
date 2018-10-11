import { module, test } from 'qunit';
import hbs from 'htmlbars-inline-precompile';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';

module('Integration | Component | pagination-pager', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{pagination-pager}}`);
    assert.ok(find('nav'));
  });

  test('when set to false and count is 1 it sets isHidden to false', async function(assert) {
    await render(hbs`{{pagination-pager autoHide=false}}`);

    assert.notOk(find('nav').classList.contains('hidden'));
  });

  test('when set to true and count is 1 it sets isHidden to true', async function(assert) {
    await render(hbs`{{pagination-pager autoHide=true}}`);

    assert.ok(find('nav').classList.contains('hidden'));
  });

  test('when set to true and count is 2 it sets isHidden to false', async function(assert) {
    await render(hbs`{{pagination-pager autoHide=true count=2}}`);

    assert.notOk(find('nav').classList.contains('hidden'));
  });
});
