import Button from "../element/button";
import Modal from "./modal";

export default function TodoInfoModal({ todo }) {
  return (
    <Modal header={todo.name} open={false}>
      <p className="px-6 py-3 text-sm">
        {todo.description ?? "No description"}
      </p>
      <div className="modal-buttons flex gap-4 justify-end px-6 py-4">
        <Button className="bg-line hover:bg-line/80 text-light-primary">
          Close
        </Button>
      </div>
    </Modal>
  );
}
