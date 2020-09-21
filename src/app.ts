// three slashes TS syntax to import a namespace
/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
	new ProjectInput();
	new ProjectList("active");
	new ProjectList("finished");
}
