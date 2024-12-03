import { useFormContext } from "react-hook-form";
import UploadFile from "../../../ui/UploadFile";

function ImagesContainer({ images }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex w-full flex-col items-end gap-[10px] rounded-md md:flex-row md:gap-0 lg:w-[50%]">
      {images?.map((image) => {
        const fieldName = image.measurement.name;

        return (
          <div key={image.id} className="w-full bg-[#000] p-[10px]">
            <UploadFile
              placeholder={fieldName}
              register={register(fieldName, {
                required: image?.is_required ? "هذا الحقل مطلوب" : false,
              })}
              error={errors?.[fieldName]?.message}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ImagesContainer;
