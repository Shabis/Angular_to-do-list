/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
    var descriptions: String[] = [];
    for (var task of taskCollection) {
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

}
