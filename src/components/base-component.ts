// Component Base Class
// I use a generic type here as hostElement and element do have the same types in all our classes.
// made it abstract as I only want to use it for inheritance. Cannot be instantiated now.
export default abstract class Component<
	T extends HTMLElement,
	U extends HTMLElement
> {
	templateElement: HTMLTemplateElement;
	hostElement: T;
	element: U;

	constructor(
		templateId: string,
		hostElementId: string,
		insertAtStart: boolean,
		newElementId?: string
	) {
		this.templateElement = document.getElementById(
			templateId
		)! as HTMLTemplateElement;
		this.hostElement = document.getElementById(hostElementId)! as T;

		const importedContent = document.importNode(
			this.templateElement.content,
			true
		);
		this.element = importedContent.firstElementChild as U;
		if (newElementId) {
			this.element.id = newElementId;
		}

		this.attach(insertAtStart);
	}

	private attach(insertAtStart: boolean) {
		this.hostElement.insertAdjacentElement(
			insertAtStart ? "afterbegin" : "beforeend",
			this.element
		);
	}

	// force inheriting classes to implement these two methods. note: abstract doesnt support private methods. configure and renderContent cannot be private in the inheriting classes.
	abstract configure(): void;
	abstract renderContent(): void;
}
