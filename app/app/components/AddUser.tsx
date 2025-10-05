"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { addUserAction } from "@/app/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-white text-black p-2 rounded-md"
      disabled={pending}
    >
      {pending ? "Adding..." : "Add User"}
    </button>
  );
}

export default function AddUser() {
  const [state, formAction] = useActionState(addUserAction, {
    ok: false,
    message: "",
  });

  return (
    <div className="flex justify-center bg-blue-200 p-4 rounded-lg shadow-sm mb-4">
      <form
        action={async (fd) => {
          const res = await formAction(fd);
          if (res?.ok)
            (document.currentScript as HTMLScriptElement)?.ownerDocument
              ?.querySelector("form")
              ?.reset();
        }}
        className="flex flex-col gap-2"
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="website" placeholder="Website" />
        <input type="text" name="company" placeholder="Company" />
        <input type="text" name="address" placeholder="Address" />
        <SubmitButton />
        {state?.ok === false && state?.message && (
          <p className="text-red-600">{state.message}</p>
        )}
        {state?.ok === true && (
          <p className="text-green-700">User added successfully.</p>
        )}
      </form>
    </div>
  );
}
