// Drag & Drop Interfaces
// set draggable="true" on html <li> to allow draggable els
namespace App {
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }
    
    export interface DragTarget {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }
}
