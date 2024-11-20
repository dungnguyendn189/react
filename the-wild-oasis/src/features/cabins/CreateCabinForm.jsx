// import { useForm } from "react-hook-form";

// import { useCreateCabin } from "features/cabins/useCreateCabin";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
// import { useEditCabin } from "./useEditCabin";
import { Textarea } from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { createCabins } from "../../services/apiCabin";
import toast from "react-hot-toast";
import { useQueryClient, useMutation } from "@tanstack/react-query";

// We use react-hook-form to make working with complex and REAL-WORLD forms a lot easier. It handles stuff like user validation and errors. manages the form state for us, etc
// Validating the user’s data passed through the form is a crucial responsibility for a developer.
// React Hook Form takes a slightly different approach than other form libraries in the React ecosystem by adopting the use of uncontrolled inputs using ref instead of depending on the state to control the inputs. This approach makes the forms more performant and reduces the number of re-renders.

// Receives closeModal directly from Modal

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({
        queryKey: ["cabin"],
      });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // console.log(data.image[0]);
    mutate({ ...data, image: data.image[0] });
  }
  function onError(err) {}
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type="modal">
      <FormRow label="Cabin name" htmlFor="name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
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
          disabled={isCreating}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
          disabled={isCreating}

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
          disabled={isCreating}

          // onClick={() => closeModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isCreating}>
          Create new cabin
          {/* {isEditSession ? "Edit cabin" : "Create new cabin"} */}
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
