/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('.b-db-Lm:not(.toggl)', {observe: true}, function (elem) {
  var getDescription,
    getProject,
    createTogglButton;

  // Get task's description.
  getDescription = function () {
    return elem.querySelector('.b-db-Lm-xn > .b-db-Lm-Nj').textContent.trim();
  };

  // Get project name if in project task view
  getProject = function () {
    var p = $('.b-Mj.b-wd .b-f-n');
    if (!p) {
      return;
    }
    return p.textContent;
  };

  // Create and return toggl button's instance.
  createTogglButton = function () {
    return togglbutton.createTimerLink({
      className: 'rememberthemilk',
      description: getDescription,
      projectName: getProject,
      buttonType: 'minimal'
    });
  };

  // Inject toggl button to each task.
  elem.querySelector('.b-db-Lm-xn').appendChild(createTogglButton());
});
