import Image from "next/image";
import { team, type TeamMember } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewBadge } from "@/components/ui/ReviewBadge";

function Avatar({ member }: { member: TeamMember }) {
  const { photo } = member;
  if (photo) {
    // The circle shows the photo's square `crop` window (fractions of the image width), so all
    // headshots share the same face size and eye line however the source photo was framed.
    const { x, y, size } = photo.crop;
    return (
      <span className="relative block h-24 w-24 shrink-0 overflow-hidden rounded-full">
        <Image
          src={photo.src}
          alt={`Portrait of ${member.name}`}
          width={photo.width}
          height={photo.height}
          sizes={`${Math.ceil(96 / size)}px`}
          className="absolute h-auto max-w-none"
          style={{ width: `${100 / size}%`, left: `${(-x / size) * 100}%`, top: `${(-y / size) * 100}%` }}
        />
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="flex h-24 w-24 items-center justify-center rounded-full bg-forest font-heading text-2xl font-bold text-white"
    >
      {member.initials}
    </span>
  );
}

export function Team() {
  return (
    <Section id={team.id} tone="paper" eyebrow={team.eyebrow} heading={team.heading} intro={team.intro}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.members.map((member, i) => (
          <Reveal as="li" key={member.name} delay={(i % 3) * 80} className="flex flex-col border border-line bg-white p-[clamp(1.5rem,1.2rem+1vw,1.75rem)]">
            <Avatar member={member} />
            <h3 className="mt-6 font-heading text-xl font-bold leading-snug">{member.name}</h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold text-red">
              {member.role}
              {member.needsApproval && <ReviewBadge>Bio pending approval</ReviewBadge>}
            </p>
            <p className="mt-4 text-[0.9375rem] text-ink-muted">{member.bio}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
