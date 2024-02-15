import { assert, describe, expect, it } from 'vitest';

describe('suite name', () => {
  it.skip('statically skipped test', () => {
    assert.equal(Math.sqrt(4), 2);
  })

  it('dynamically skipped test', (context) => {
    context.skip();
    expect(1 + 1).eq(2);
  });

  it.todo('todo test', () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it.fails('Should be failed', () => {
    assert.equal(Math.sqrt(4), 2);
  });

  it('snapshot', () => {
    console.log('12345');
    expect({ foo: 'bar' }).toMatchSnapshot();
  });

  it('foo', () => {
    assert.equal(Math.sqrt(4), 3);
  });
});

describe('empty suite', () => {
  console.log('empty suite log');
});
