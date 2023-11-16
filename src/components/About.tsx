import useIntersectionObserver from "./Observer";

function About() {
  const {} = useIntersectionObserver();

  return (
    <section className="about hidden">
      <h2 className="heading">About Me</h2>

      <p className="text">
        Hey there, I'm Lucas, and I'm absolutely thrilled to talk about my
        journey as a front-end developer. Over the years, I've had the privilege
        of working on more than <span>200 Projects</span>, and I can't express
        how much I love what I do.
      </p>
      <p className="text">
        You see, my fascination with coding started as a mere curiosity about
        how websites are built. But that curiosity quickly turned into an
        unshakable passion for creating incredible <span>Web Applications</span>{" "}
        and user interfaces. I believe that a great user interface isn't just
        about code and pixels; it's about crafting an immersive and
        user-friendly experience.
      </p>
      <p className="text">
        Looking ahead, I'm beyond excited to continue my journey as a front-end
        developer. The possibilities in this field are endless, whether it's
        building responsive websites, optimizing user experiences, or diving
        into the latest tech trends. I'm here to make my mark in the digital
        world, one project at a time, and I couldn't be happier about it!
      </p>
    </section>
  );
}

export default About;
