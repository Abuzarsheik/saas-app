import CompanionCard from "@/components/companioncard";
import CompanionList from "@/components/companionlist";
import CTA from "@/components/cta";
import { recentSessions } from "@/constants";
import {
  getAllCompanions,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

export default async function Home() {
  const companions = await getAllCompanions({ limit: 3 });
  const recentSessionsCompanions  = await getRecentSessions(10);
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            {...companion}
            key={companion.id}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
      <section className="home-section">
        <CompanionList
          title="Recent Sessions"
          companions={recentSessionsCompanions }
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
}
