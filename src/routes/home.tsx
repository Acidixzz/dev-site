import type { Component } from 'solid-js';

const Home: Component = () => {
  return (
    <main class="flex justify-center items-center min-h-screen">
      <div class="group-box overflow-hidden flex flex-col items-center text-center">
        <div class="image" style={"border-radius: 5px; --bg-image: url('/src/assets/TuneVault.png');"}></div>
        <h1 class="uppercase header-text" style={"padding-bottom: 0; padding-top: 10px"}>
          Tune Vault
        </h1>
        <div class="flex gap-4 mt-4">
          {/* App Store Button */}
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-black"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              class="h-12"
            />
          </a>

          {/* Google Play Button */}
          {/* <button
            disabled
            class=" text-white px-4 py-2 rounded-lg cursor-not-allowed opacity-70"
            title="Coming Soon"
          >
            Coming Soon on Google Play
          </button> */}
        </div>

        {/* Footer Links */}
        <div class="flex gap-6 mt-6 text-sm text-gray-500 underline">
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div>
      </div>
    </main>
  );
};

export default Home;
