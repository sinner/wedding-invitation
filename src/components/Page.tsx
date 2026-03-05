import EnvelopeButton from "@/components/EnvelopeButton";
import Content from "@/components/Content";

export default function Page() {
  return (
    <section className="overflow-hidden relative z-20 mx-auto h-full min-h-screen w-full max-w-md overflow-x-clip sm:shadow-xl">
      <EnvelopeButton />
      <Content />
    </section>
  );
}
