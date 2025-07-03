import { privacyTerms } from "@/data/privacyTerms";

export default function PrivacyPolicyBody() {
  return (
    <div className="gutter-container">
      {privacyTerms.map((section) => (
        <section className="term-section" key={section.id}>
          <h2 className="term-section__title">
            <span className="_num">{section.id}.</span>
            {section.title}
          </h2>
          <div className="term-section__body">{section.body}</div>
        </section>
      ))}
    </div>
  );
}
