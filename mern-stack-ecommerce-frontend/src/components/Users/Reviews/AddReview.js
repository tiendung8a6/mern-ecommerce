import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReviewAction } from "../../../redux/slices/reviews/reviewsSlice";
import ErrorMsg from "../../ErrorMsg/ErrorMsg";
import LoadingComponent from "../../LoadingComp/LoadingComponent";
import SuccessMsg from "../../SuccessMsg/SuccessMsg";
import './ratting.css'
export default function AddReview() {
  //Dispatch
  const dispatch = useDispatch();
  //get params
  const { id } = useParams();
  //---form data---
  const [formData, setFormData] = useState({
    rating: "",
    message: "",
  });

  //onChange
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //onSubmit
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReviewAction({
        id,
        message: formData.message,
        rating: formData.rating,
      })
    );
  };

  //get data from store
  const { loading, error, isAdded } = useSelector((state) => state?.reviews);

  return (
    <>
      {error && <ErrorMsg message={error?.message} />}
      {isAdded && <SuccessMsg message="Thanks for the review" />}
      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Add Your Review
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              You are reviewing:{" "}
              <span className="text-gray-900">Product Name</span>
            </p>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <div
                  value={formData.rating}
                  onChange={handleOnChange}
                  name="rating"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 border-2 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  defaultValue="Canada">
                  {/* review rating */}
                  <div class="rating">
                    <input value="1" name="star-radio" id="star-1" type="radio" />
                    <label for="star-1">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
                    </label>
                    <input value="2" name="star-radio" id="star-2" type="radio" />
                    <label for="star-2">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
                    </label>
                    <input value="3" name="star-radio" id="star-3" type="radio" />
                    <label for="star-3">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
                    </label>
                    <input value="4" name="star-radio" id="star-4" type="radio" />
                    <label for="star-4">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
                    </label>
                    <input value="5" name="star-radio" id="star-5" type="radio" />
                    <label for="star-5">
                      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" pathLength="360"></path></svg>
                    </label>
                  </div>

                </div>
              </div>

              {/* description */}
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleOnChange}
                    className="block w-full rounded-md p-2 border-gray-300 border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                {loading ? (
                  <LoadingComponent />
                ) : (
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    Add New Review
                  </button>
                )}
              </div>


            </form>
          </div>
        </div>
      </div>
    </>
  );
}
