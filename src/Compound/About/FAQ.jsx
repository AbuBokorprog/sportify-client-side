import React from "react";

const FAQ = () => {
  return (
    <div>
      <div className="mb-4">
        <h2 className="text-2xl lg:text-4xl font-semibold text-center">
          Answers to Your Questions
        </h2>
        <p className="mx-4 lg:mx-16 text-center text-sm">
          Find quick answers to commonly asked questions about Sportify. If you
          have any <br /> inquiries about our sports courses, coaching services,
          or policies, this section has you covered.
        </p>
      </div>
      <div className=" mb-20">
        <div className="">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" />
            <div className="collapse-title my-2 text-xl font-medium">
              What is Sportify?
            </div>
            <div className="collapse-content">
              <p>
                Sportify is an all-in-one platform for sports enthusiasts. We
                offer a wide range of sports courses, coaching, and resources to
                help you excel in your favorite sport.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How do I sign up for a course or coaching session?
            </div>
            <div className="collapse-content">
              <p>
                Signing up is easy! Just browse our courses, select the one you
                like, and follow the registration process. You can also contact
                us for personalized coaching.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              What types of sports courses do you offer?
            </div>
            <div className="collapse-content">
              <p>
                We offer a diverse selection, from tennis and swimming to yoga
                and martial arts. You'll find courses suitable for beginners to
                advanced athletes.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Who are the instructors?
            </div>
            <div className="collapse-content">
              <p>
                Our instructors are certified experts in their respective
                fields. They have a wealth of experience and are dedicated to
                helping you succeed.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How much does it cost to participate in a course or coaching
              session?
            </div>
            <div className="collapse-content">
              <p>
                Prices vary depending on the course and coaching services. You
                can find detailed pricing information on each course's page.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I cancel or reschedule a session?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can reschedule or cancel sessions based on the course's
                specific policies. Please review the course details for
                information on our cancellation and rescheduling policies.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Is there a refund policy?
            </div>
            <div className="collapse-content">
              <p>
                We have a refund policy in place. Refund eligibility depends on
                the course and the timing of the cancellation. Please refer to
                the course details for specifics.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              How can I contact your support team?
            </div>
            <div className="collapse-content">
              <p>
                You can reach our support team through the "Contact Us" page on
                our website. We're here to assist you with any questions or
                concerns.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Do I need special equipment or attire for the courses?
            </div>
            <div className="collapse-content">
              <p>
                Requirements vary by course. Some may require specific sports
                gear, while others may provide equipment. Check the course
                details for information on what you need.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              Can I suggest a new sport or course you should offer?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! We value your input. Feel free to contact us with
                your suggestions, and we'll consider adding new sports or
                courses to our offerings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
