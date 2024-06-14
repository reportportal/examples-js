/*
 *  Copyright 2024 EPAM Systems
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const calculator = require('../src/calculator');

describe('Calculator', () => {
  it.each([
    [[1, 41], 42],
    [[1, 2, 39], 42],
    [[1, 2, NaN], NaN],
    [[1, 2, Infinity], Infinity],
  ])('adds %p expecting %p', (numbers, result) => {
    expect(calculator('+', numbers)).toEqual(result);
  });

  it.each([
    [[43, 1], 42],
    [[44, 1, 1], 42],
    [[1, 2, NaN], NaN],
    [[1, 2, Infinity], -Infinity],
  ])('subtracts %p expecting %p', (numbers, result) => {
    expect(calculator('-', numbers)).toEqual(result);
  });

  it.each([
    [[21, 2], 42],
    [[3, 7, 2], 42],
    [[42, NaN], NaN],
    [[42, Infinity], Infinity],
  ])('multiplies %p expecting %p', (numbers, result) => {
    expect(calculator('*', numbers)).toEqual(result);
  });

  it.each([
    [[84, 2], 42],
    [[168, 2, 2], 42],
    [[42, 0], Infinity],
    [[42, NaN], NaN],
  ])('divides %p expecting %p', (numbers, result) => {
    expect(calculator('/', numbers)).toEqual(result);
  });
});
