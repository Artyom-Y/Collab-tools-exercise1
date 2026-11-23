export default {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'subject-case': [2, 'never', ['upper-case', 'pascal-case', 'camel-case']],
        'subject-empty': [2, 'never'],
        'subject-max-length': [2, 'always', 80]
    }
}

