// three slashes TS syntax to import a namespace
// / <reference path="components/project-input.ts" />
// / <reference path="components/project-list.ts" />

// when using ES module imports, must use .js instead of .ts, as if it has already been compiled (Extensions can be ommitted altogether using webpack/build tools)
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

// namespace App {
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
// }
