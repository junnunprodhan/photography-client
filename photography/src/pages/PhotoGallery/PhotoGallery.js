import React from "react";

const PhotoGallery = () => {
  return (
    <section className="py-6 dark:bg-gray-800 dark:text-gray-50 w-3/4 mx-auto">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://s3-img.pixpa.com/com/large/5028/1558405827-627376-img-1388jpg.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i0.wp.com/shaadiwish.com/blog/wp-content/uploads/2020/06/faisal-alam-1024x683.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&w=1000&q=80"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://i.pinimg.com/originals/a6/c7/7d/a6c77d4bc50f6be77f490fba415a3491.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/c_fill,g_faces:auto,fl_progressive,h_900,w_1200/v1/images2/program_content/hs-1583374498.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://inkforall.com/wp-content/uploads/2022/08/308dad18-bea5-ba0b-4921-878ed959b05d.jpeg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/07/social-media-for-photographers-follow-1.jpg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://miro.medium.com/max/1400/1*obeUwTVkcwGiWX4zf0StTg.jpeg"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://lh5.googleusercontent.com/Y_GF83WZA9cWL02p9FDvgoTJgqivsHPcrcZbs8wSqVskfa3TC8hHy9VVokbaJONnnJLwIZonUanVv0Dnj_YOscyqLB86xUDfAJLsB9DzNhQ-5R1cwNjgA2YP1GDr-Hv7f-DaF8Xt=s0"
        />
        <img
          src="https://cgud.b-cdn.net/wp-content/uploads/best-budget-lenses-for-bird-photography.jpg"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
    </section>
  );
};

export default PhotoGallery;
