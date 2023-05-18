module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['feat', 'fix', 'chore', 'test', 'refactor', 'style', 'perf', 'docs', 'ci'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'body'],
  scopes: [],
  types: {
    chore: {
      description: '构建过程或辅助工具的变更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: '与持续集成相关的变更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: '仅文档更改',
      emoji: '✏️',
      value: 'docs',
    },
    feat: {
      description: '新功能',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: '捉虫',
      emoji: '🐛',
      value: 'fix',
    },
    perf: {
      description: '提升性能',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: '代码逻辑重构',
      emoji: '💡',
      value: 'refactor',
    },
    style: {
      description: '仅样式调整',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: '代码测试',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: '请选择您正在提交的更改类型：',
      body: '请提供详细的更改描述：\n ',
    },
  },
};
