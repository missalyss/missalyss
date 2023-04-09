const Content = () => {
  return (
    <div className={`bg-purple-light p5 text-md max-width`}>
      <h1 className="">resume</h1>
      <h2 className="bg-purple p3">profile</h2>
      <p>
        Energetic, passionate, and friendly engineer who naturally gravitates
        toward leadership challenges. My objective is to empower the Starbucks
        Web Engineering team with ability to drive business by making the best
        possible user experiences for Starbucks’ customers.
      </p>
      <h2 className="bg-purple p3">experience</h2>
      <span>September 2017—Present</span>
      <h3>Starbucks</h3>
      <h4 className="bg-purple p3">Leadership:</h4>
      <ul>
        <li>
          As a pod lead, represented the interests and communicated the needs of
          cross-platform front-end engineers, resulting in smooth feature
          development and operations
        </li>
        <li>Embraces agility by</li>
        <li>
          Ensured the successful and punctual completion of promo codes feature
          on the web after difficult cross-team collaboration and unexpected
          internal team problems. This resulted in upholding the reputation of
          the team and successfully deploying a business-driving feature.
        </li>
        <li>
          Was (and is) a mentor to multiple summer interns and new Partners,
          ensuring their success and helping them feel welcome.
        </li>
        <li>
          Promotes team building and team culture by pushing to continue
          interesting and inclusive extra-curricular activities, such as happy
          hours and baking contests
        </li>
      </ul>
      <h4 className="bg-purple p3">Personal Growth:</h4>
      <ul>
        <li>
          Contributing to .NET solutions for SecureUIv2 in an unfamiliar
          programming language, indicating flexibility, versatility, and grit
          when coming up against unknown challenges
        </li>
        <li>
          Completing several full day trainings, demonstrating a desire to grow
          <ul>
            <li>Devops learning journey</li>
            <li>3 day application security</li>
            <li>D3M: Data Driven Decision Making</li>
            <li>UX design</li>
          </ul>
        </li>
      </ul>

      <h4 className="bg-purple p3">Excellence in the web:</h4>
      <ul>
        <li>Proficient at voiceover; dedication to accessibility</li>
        <li>
          Demonstrates an investment in the future of web by representing
          Starbucks in the Chrome Advisory Board (May 2021- current).
        </li>
        <li>
          Showed dedication to application health by creating
          <ul>
            <li>a Splunk dashboard</li>
            <li>perf budget</li>
            <li>Contributing to metric dashboards</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Content;
