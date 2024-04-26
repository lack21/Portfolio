import useIntersectionObserver from "./Observer";

function About({ currentLanguage }: { currentLanguage: string }) {
  const {} = useIntersectionObserver();

  return (
    <section className="about hidden">
      <h2 className="heading">
        {currentLanguage == "eng" ? "About Me" : "ჩემს შესახებ"}
      </h2>

      <p className="text">
        {currentLanguage == "eng" ? (
          <>
            Hey there, I'm Luka, and I'm absolutely thrilled to talk about my
            journey as a web developer. Over the years, I've had the privilege
            of working on more than
            <span> 200 Projects </span>
            and I can't express how much I love what I do.
          </>
        ) : (
          <>
            გამარჯობა, მე ვარ ლუკა და ძალიან აღფრთოვანებული ვარ ვისაუბრო ჩემს
            მოგზაურობაზე, როგორც ვებ დეველოპერმა. წლების განმავლობაში, მე მქონდა
            პრივილეგია მემუშავა
            <span> 200-ზე მეტ პროექტზე </span>
            და ვერ გამოვხატავ, რამდენად მიყვარს ის, რასაც ვაკეთებ.
          </>
        )}
      </p>
      <p className="text">
        {currentLanguage == "eng" ? (
          <>
            You see, my fascination with coding started as a mere curiosity
            about how websites are built. But that curiosity quickly turned into
            an unshakable passion for creating incredible
            <span> Web Applications </span>
            and user interfaces. I believe that a great user interface isn't
            just about code and pixels; it's about crafting an immersive and
            user-friendly experience.
          </>
        ) : (
          <>
            ხედავთ, ჩემი გატაცება კოდირებით დაიწყო, როგორც უბრალო
            ცნობისმოყვარეობა იმის შესახებ, თუ როგორ იქმნება ვებსაიტები. მაგრამ
            ეს ცნობისმოყვარეობა სწრაფად გადაიქცა ურყევ ვნებად წარმოუდგენელი
            <span> ვებ აპლიკაციებისა </span> და მომხმარებლის ინტერფეისების
            შესაქმნელად. მე მჯერა, რომ შესანიშნავი მომხმარებლის ინტერფეისი არ
            არის მხოლოდ კოდი და პიქსელი; ეს ეხება ჩაძირული და მოსახერხებელი
            გამოცდილების შექმნას.
          </>
        )}
      </p>
      <p className="text">
        {currentLanguage == "eng" ? (
          <>
            Looking ahead, I'm beyond excited to continue my journey as a
            front-end developer. The possibilities in this field are endless,
            whether it's building responsive websites, optimizing user
            experiences, or diving into the latest tech trends. I'm here to make
            my mark in the digital world, one project at a time, and I couldn't
            be happier about it!
          </>
        ) : (
          <>
            წინსვლის ყურებით, მზად ვარ, რომ გავაგრძელო ჩემი მოგზაურობა, როგორც
            ვებ დეველოპერი. შესაძლებლობები ამ სფეროში უსაზღვროა, იქნება ეს
            ვებსაიტების შექმნა, მომხმარებლის გამოცდილების ოპტიმიზაცია ან
            დაივინგი უახლეს ტექნიკურ ტენდენციებში. მე აქ იმისთვის ვარ, რომ ჩემი
            კვალი დავტოვო ციფრულში მსოფლიო, ერთი პროექტი ჯერზე და ამაზე ბედნიერი
            ვერ ვიქნებოდი!
          </>
        )}
      </p>
    </section>
  );
}

export default About;
