import { AppointmentForm } from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";

import Image from "next/image";

const NewAppointment = async ({ params: { userId } }: SearchParamProps) => {
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
            patientId={patient.$id}
            userId={userId}
            type="create"
          />

          <p className="justify-items-end text-dark-600 xl:text-left">
            © 2024 PandaCare
          </p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appoitment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};
export default NewAppointment;
