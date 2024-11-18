import Button from "./Button";

export default function ConfirmMessage({
  onConfirm,
  message,
  disabled,
  onCloseModal,
}) {
  const handleConfirm = async () => {
    await onConfirm();
    onCloseModal();
  };

  return (
    <div className="flex flex-col p-[20px]">
      <p className="mb-[1.2rem]">{message}</p>

      <div className="flex justify-end gap-[1.2rem]">
        <Button
          AriaLabel="acceptConfirm"
          loading={disabled}
          onClick={handleConfirm}
        >
          نعم
        </Button>
        <Button
          AriaLabel="refuseConfirm"
          loading={disabled}
          variant="secondary"
          onClick={onCloseModal}
        >
          إلغاء
        </Button>
      </div>
    </div>
  );
}
