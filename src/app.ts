// three slashes TS syntax to import a namespace
// / <reference path="components/project-input.ts" />
// / <reference path="components/project-list.ts" />

// when using ES module imports, must use .js instead of .ts, as if it has already been compiled. Extensions now ommitted altogether since we are now using webpack.
import { ProjectInput } from "./components/project-input";
import { ProjectList } from "./components/project-list";

// namespace App {
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
// }

