function skillsMember() {
  return {
    name: 'skillsMember',
    restrict: 'E',
    templateUrl: 'skills-member.html',
    scope: {
      member: '='
    }
  };
}