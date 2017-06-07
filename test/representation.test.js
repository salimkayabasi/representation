import Github from 'representation-source-github';
import request from 'request-promise-native';
import Representation from '../src/representation';

const token = process.env.GITHUB_TOKEN;

describe('Representation', () => {
  let representation;
  beforeEach(() => {
    representation = new Representation();
  });

  test('generate', async () => {
    const github = new Github(
      {
        user: 'salimkayabasi',
        token,
      },
      request,
    );
    const result = await representation
      .addSource(github)
      .generate('/dist/a.json');
    expect(result).not.toBeNull();
  });
});
