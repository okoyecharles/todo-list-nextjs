import Button from "../element/button";
import Modal from "./modal";

export default function EditTodoModal({ todo }) {
  return (
    <Modal header="Edit Todo" open={true}>
      <form action="" className="flex flex-col">
        <input
          name="name"
          type="text"
          placeholder="What has to be done..."
          className="bg-dark-secondary text-light-secondary text-sm px-6 py-3 outline-none border-b border-transparent focus:border-light-secondary transition-colors"
        />
        <hr className="border-line"/>
        <textarea
          name="description"
          placeholder="Description (Optional)"
          className="resize-none bg-dark-secondary text-light-secondary text-sm px-6 py-3 outline-none border-b border-transparent focus:border-light-secondary transition-colors"
          rows={3}
        ></textarea>
      </form>
      <div className="modal-buttons flex gap-4 justify-end px-6 py-4">
        <Button className="bg-line hover:bg-line/80 text-light-primary">Cancel</Button>
        <Button>Save</Button>
      </div>
    </Modal>
  );
}
