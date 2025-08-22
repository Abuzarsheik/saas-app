import CompanionCard from "@/components/companioncard";
import CompanionList from "@/components/companionlist";
import CTA from "@/components/cta";
import { recentSessions } from "@/constants";

export default function Home() {
  return (
    <main>
      <h1>Popular Companions</h1>

      <section className="home-section">
        <CompanionCard
          id="1"
          name="Neura the Brainy Explorer"
          topic="Neural Network of the Brain"
          subject="Science"
          duration={45}
          color="#f22"
        />
        <CompanionCard
          id="2"
          name="Countsy the Number Wizard"
          topic="Derivatives & Integrals"
          subject="Maths"
          duration={30}
          color="#f09"
        />
        <CompanionCard
          id="3"
          name="Verba the Vocabulary Builder"
          title=" English Literature"
          subject="Language"
          duration={30}
          color="#f99"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recent Sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
}
