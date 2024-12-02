import { useForm } from "react-hook-form";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import { Textarea } from "../../ui/Textarea";

import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onClose }) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createCabin } = useCreateCabin();

  const { isEditting, editCabin } = useEditCabin();

  const isWorking = isCreating || isEditting;

  function onSubmit(data) {
    // console.log(data);
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession) {
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onClose?.();
          },
        }
      );
    } else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onClose?.();
          },
        }
      );
  }

  function onError(err) {}

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onclose ? "modal" : "regular"}
    >
      <FormRow label="Cabin name" htmlFor="name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              getValues().regularPrice >= value ||
              "Discount should be les than regular price",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
          disabled={isWorking}

          //   // VIDEO this doesn't work, so never mind about this, it's too much
          //   // validate: (value) =>
          //   //   value[0]?.type.startsWith('image/') || 'Needs to be an image',
          // })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          // disabled={isWorking}
          onClick={() => onClose?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

// { cabinToEdit, closeModal }
// const { mutate: createCabin, isLoading: isCreating } = useCreateCabin();
// const { mutate: editCabin, isLoading: isEditing } = useEditCabin();
// const isWorking = isCreating || isEditing;

// // For an editing session
// const { id: editId, ...editValues } = cabinToEdit || {};
// delete editValues.created_at;
// const isEditSession = Boolean(editId);

// // One of the key concepts in React Hook Form is to register your component into the hook. This will make its value available for both the form validation and submission.
// const { register, handleSubmit, formState, reset, getValues } = useForm({
//   defaultValues: isEditSession ? editValues : {},
// });
// const { errors } = formState;

// // Invoked in ALL validation passes. Here we get access to the form data
// const onSubmit = function (data) {
//   // No need to validate here, because it's already been done. This is REALLY nice!

//   const options = {
//     onSuccess: (data) => {
//       // If this component is used OUTSIDE the Modal Context, this will return undefined, so we need to test for this
//       closeModal?.();
//       reset();
//     },
//   };

//   const image = typeof data.image === "object" ? data.image[0] : data.image;

//   if (isEditSession)
//     editCabin(
//       {
//         newCabinData: { ...data, image },
//         id: editId,
//       },
//       options
//     );
//   else createCabin({ ...data, image }, options);
// };

// // Invoked when validation fails
// const onError = function (errors) {
//   console.log("Failed validation!", errors);
// };

// By default, validation happens the moment we submit the form, so when we call handleSubmit. From them on, validation happens on the onChange event [demonstrate]. We cah change that by passing options into useForm ('mode' and 'reValidateMode')
// https://react-hook-form.com/api/useform

// The registered names need to be the same as in the Supabase table. This makes it easier to send the request
// "handleSubmit" will validate your inputs before invoking "onSubmit"
