import { defineConfig } from 'orval';

// 本地
const INPUT = './src/openapi/spec.yaml';
// 线上
const URL = '';

export default defineConfig({
  swagger: {
    output: {
      workspace: 'src/openapi',
      target: './__service__/swagger.ts',
      client: 'axios',
      mode: 'split',
      mock: true,
      clean: true,
      prettier: true,
      override: {
        title: () => 'OpenApi',
        mutator: {
          path: './client.ts',
          name: 'x',
        },
        header: (info) =>
          [
            '此类型文件由 Swagger 解析自动生成，请勿修改',
            '--------------------------------------',
            info.title,
            ...(info.version ? [`OpenAPI spec version: ${info.version}`] : []),
            ...(info.description?.match(/.{1,120}/g) ?? []),
          ].filter(Boolean),
        components: {
          // schemas: {
          //   suffix: 'DTO',
          // },
          responses: {
            suffix: 'Response',
          },
          parameters: {
            suffix: 'Params',
          },
          requestBodies: {
            suffix: 'Payload',
          },
        },
      },
    },
    input: {
      target: URL ? URL : INPUT,
    },
    // hooks: {
    //   afterAllFilesWrite: 'prettier --write',
    // },
  },
});
