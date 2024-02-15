const User = () => {
  return (
    <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div class="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <img
          src="https://www.material-tailwind.com/img/team-3.jpg"
          alt="profile"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Natalie Paisley
        </h4>
        <h5 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Age: 12
        </h5>
        <h6 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Female
        </h6>
      </div>
    </div>
  );
};
export default User;
