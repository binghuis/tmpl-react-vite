module.exports = {
  disableEmoji: false,
  format: '{type}: {subject}',
  list: ['feat', 'fix', 'test', 'refactor', 'chore', 'perf', 'ci', 'docs'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'subject', 'body'],
  scopes: [],
  types: {
    feat: {
      description: '新功能',
      emoji: '🎉',
      value: 'feat',
    },
    fix: {
      description: '捉虫',
      emoji: '🐛',
      value: 'fix',
    },
    test: {
      description: '测试',
      emoji: '💊',
      value: 'test',
    },
    refactor: {
      description: '重构',
      emoji: '💡',
      value: 'refactor',
    },
    chore: {
      description: '构建/配置/工具变更',
      emoji: '🔧',
      value: 'chore',
    },
    perf: {
      description: '性能优化',
      emoji: '🚀',
      value: 'perf',
    },
    ci: {
      description: '部署/持续集成变更',
      emoji: '🤖',
      value: 'ci',
    },
    docs: {
      description: '文档更新',
      emoji: '📝',
      value: 'docs',
    },
  },
  messages: {
    type: '选择您正在提交的更改类型：',
    subject: '以简短的祈使语描述更改：\n',
    body: '提供更详细的更改描述：\n',
  },
};
