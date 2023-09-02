import { useEffect, useRef, useState } from "react";
import Button from "../element/button";
import Modal from "./modal";
import { createTodo } from "@/app/helper/todo";

export default function CreateTodoModal({ open, setOpen, createTodo }) {
  const [fields, setFields] = useState({ name: "", description: "" });
  const [error, setError] = useState(null);
  const nameField = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCreate();
  }

  const handleCreate = () => {
    const { name, description } = fields;
    setFields({
      name: name,
      description: description,
    });
    const res = createTodo(fields);
    if (res.success) setOpen(false);
    else setError(res.error.message);
  };

  useEffect(() => {
    if (!open) return;
    setFields({ name: "", description: "" });
    setError(null);
    nameField.current.focus()
  }, [open]);

  return (
    <Modal header="Create Todo" open={open} setOpen={setOpen}>
      <div className="error text-sm px-6 pb-2 text-red-400">{error}</div>
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          ref={nameField}
          placeholder="What has to be done..."
          className="bg-dark-secondary placeholder:text-light-secondary text-light-primary text-sm px-6 py-3 outline-none border-b border-transparent focus:border-light-secondary transition-colors"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
        <hr className="border-line" />
        <textarea
          name="description"
          placeholder="Description (Optional)"
          className="resize-none bg-dark-secondary placeholder:text-light-secondary text-light-primary text-sm px-6 py-3 outline-none border-b border-transparent focus:border-light-secondary transition-colors"
          rows={3}
          value={fields.description}
          onChange={(e) =>
            setFields({ ...fields, description: e.target.value })
          }
        ></textarea>
      </form>
      <div className="modal-buttons flex gap-4 justify-end px-6 py-4">
        <Button
          className="bg-line hover:bg-line/80 text-light-primary"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button onClick={handleCreate}>Save</Button>
      </div>
    </Modal>
  );
}
