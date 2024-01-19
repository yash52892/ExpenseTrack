import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div class="bg-white">
        <header class="absolute inset-x-0 top-0 z-50">
        <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/home" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <Link class="text-sm font-semibold leading-6 text-gray-900">Profile</Link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/" class="text-sm font-semibold leading-6 text-gray-900">Log out <span aria-hidden="true">&rarr;</span></Link>
      </div>
    </nav>
    </header>
    </div>
    <div class="relative isolate px-6 pt-14 lg:px-8 text-center">
        <p class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to Expense Tracker!!!</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Your profile is incomplete.{" "}
          <button>
            <Link to="/profile">Complete now</Link>
          </button>{" "}
        </p>
      </div>
    </>
  );
};
export default Home;
