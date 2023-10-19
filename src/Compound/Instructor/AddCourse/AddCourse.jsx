import axios from "axios";
import swal from "sweetalert";

const AddCourse = () => {
  const courseHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const course = {
      thumbnail: form.photoURL.value,
      title: form.title.value,
      description: form.description.value,
      availableSeat: form.seat.value,
      price: form.price.value,
    };
    axios
      .post("/instructor/course", course)
      .then(({data}) => {
        swal(data.message, "success");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-full h-full">
      <div>
        <h2 className="text-2xl text-center mx-auto lg:text-5xl font-semibold mb-3">
          Add Course
        </h2>
        <hr />
      </div>
      <div className="mx-20 mt-5">
        <form onSubmit={courseHandler}>
          <div className="form-control my-1">
            <label htmlFor="title">Course Name:*</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Type Your course name"
              className="input input-bordered border-2 border-secondary"
              required
            />
          </div>
          <div className="form-control my-1">
            <label htmlFor="photoURL">Photo URL:*</label>
            <input
              type="url"
              name="photoURL"
              placeholder="Paste your Photo URL"
              id="photoURL"
              className="input input-bordered border-2 border-secondary"
              required
            />
          </div>
          <div className="grid grid-cols-2 my-1 gap-4 items-center ">
            <div className="form-control">
              <label htmlFor="Price">Price:*</label>
              <input
                type="text"
                name="price"
                placeholder="Type your course price"
                id="Price"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="Seat">Available Seat:*</label>
              <input
                type="text"
                name="seat"
                placeholder="Type your course available seat"
                id="seat"
                className="input input-bordered border-2 border-secondary"
                required
              />
            </div>
          </div>
          <div className="form-control my-1">
            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              className="textarea textarea-bordered border-2 border-secondary"
              placeholder="Description"></textarea>
          </div>
          <div className="text-center my-1">
            <input
              type="submit"
              value="Add Course"
              className="btn btn-secondary mt-4 mx-auto text-center"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
