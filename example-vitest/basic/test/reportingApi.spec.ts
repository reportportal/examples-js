import { expect, test } from 'vitest';
import fs from 'fs';
import path from 'path';

test('Attachment', () => {
  const fileName = 'test.png';
  const fileContent = fs.readFileSync(path.resolve(__dirname, './files', fileName));

  ReportingApi.attachment({
    name: fileName,
    type: 'image/png',
    content: fileContent.toString('base64'),
  }, 'Test PNG description');

  expect(true).toBe(true);
});
