import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogBackdrop,
} from "@headlessui/react";

export interface IModalProps {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
}

export default function Modal({ title, children, isOpen }: IModalProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => {}}
        __demoMode
      >
        <DialogBackdrop className="fixed inset-0 backdrop-blur-xs" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-2xl font-medium text-[#5818c3]"
                >
                  {title}
                </DialogTitle>
              )}
              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
