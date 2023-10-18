import React from "react";

const CustomerReviews = () => {
  return (
    <div className="bg-primary rounded-3xl my-20 pb-20 pt-10 px-4 text-white">
      <div className="text-center mb-5">
        <h2 className="text-2xl lg:text-5xl font-semibold my-3">
          Voices of Satisfaction
        </h2>
        <p className="mx-4 lg:mx-16 text-sm">
          Explore what our valued customers have to say about their experiences
          with us in our Testimonial Section. From inspiring stories of
          transformation to words of praise for our exceptional service, our
          satisfied clients share their authentic testimonials. Discover how
          Sportify has made a positive impact on their lives and see why you
          should join our community of happy and motivated individuals.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 mx-auto gap-8">
        <div className="card">
          <div className="card-body glass hover:bg-info rounded-2xl">
            <p>
              I can't say enough good things about Sportify! The facilities are
              top-notch, the staff is incredibly friendly and helpful, and the
              atmosphere is always buzzing with positive energy. I've seen
              significant improvements in my fitness and overall well-being
              since becoming a member. It's not just a gym; it's a community of
              like-minded individuals who motivate and support each other.
              Sportify has truly transformed my approach to a healthier
              lifestyle, and I'm grateful to be a part of it.
            </p>
            <div className="flex gap-2 items-center">
              <img
                className="w-20 rounded-full"
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&w=600"
                alt=""
              />
              <p className="font-medium">Sarah H</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body glass hover:bg-info rounded-2xl">
            <p>
              Sportify has exceeded my expectations in every way. The range of
              activities and classes they offer is impressive, and the
              instructors are not only knowledgeable but also passionate about
              what they do. I've not only improved my fitness levels but have
              also found a second home here. The sense of camaraderie among
              members is heartwarming. If you're looking for a place to reach
              your fitness goals and make lasting friendships, Sportify is the
              perfect choice.
            </p>
            <div className="flex gap-2 items-center">
              <img
                className="w-20 rounded-full"
                src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&w=600"
                alt=""
              />
              <p className="font-medium">John R</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
