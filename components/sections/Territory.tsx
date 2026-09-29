import { territory } from "@/content/site";
import { Container } from "@/components/ui/Section";
import { LogoMark } from "@/components/ui/Logo";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

/** Slim band under the hero: the client's turtle mark and the approved territorial statement. */
export function Territory() {
  return (
    <div className="border-b border-line bg-paper">
      <Container className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-5 text-center">
        <LogoMark height={36} />
        <p className="font-heading text-lg font-bold md:text-xl">{territory.statement}</p>
        {territory.needsApproval && <ReviewBadge />}
      </Container>
    </div>
  );
}
