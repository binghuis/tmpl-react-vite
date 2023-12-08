import { xget } from '@/openapi/custom-axios';

class Http {
  private cache = new Map<string, Promise<unknown>>();

  joke() {
    xget('https://v2.jokeapi.dev/joke/Programming?idRange=1');
  }
}

const iHttp = new Http();

export default iHttp;
