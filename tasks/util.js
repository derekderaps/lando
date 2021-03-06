'use strict';

/**
 * This file/module contains helpful util tasks.
 */

module.exports = function() {

  /*
   * Increments the version number, etc.
   */
  return {
    bump: {
      options: {
        files: ['package.json', 'package-lock.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'package-lock.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin',
        gitDescribeOptions: '--tags --always --abbrev=1',
        globalReplace: false,
        prereleaseName: 'beta',
        metadata: '',
        regExp: false
      }
    }
  };

};
