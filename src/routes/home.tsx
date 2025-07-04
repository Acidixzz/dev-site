import type { Component } from 'solid-js';

const Home: Component = () => {
  return (
    <main class="flex flex-col justify-center items-center min-h-screen">
      <div style={{ 'margin-top': '15vh' }} />
      <div class="group-box overflow-hidden flex flex-col items-center text-center">
        <div class="image" style={{ "border-radius": "5px", '--bg-image': "url('/dev-site/TuneVault.png')" }}></div>
        <h1 class="uppercase header-text" style={"padding-bottom: 0; padding-top: 10px"}>
          Tune Vault
        </h1>
        <div class="flex gap-4 mt-4">
          {/* App Store Button */}
          {/* <a
            href="https://apps.apple.com/app/6670519481"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-black"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              class="h-12"
            />
          </a> */}

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
        {/* <div class="flex gap-6 mt-6 text-sm text-gray-500 underline">
          <a href="/terms" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
          <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
        </div> */}
      </div>

      <div class="group-box overflow-hidden flex flex-col items-center text-center pt-5">
        <h2 class="text-xl font-semibold text-center" style={{ color: '#fff' }}>Privacy Policy</h2>
        <p style={{ color: '#fff', "padding": '25px' }}>Tune Vault respects your privacy. This privacy policy outlines how we handle any information related to your use of the app.

          We do not collect, store, or share any personal or usage data from users. The app runs entirely on your device and does not connect to any external servers for analytics, tracking, or data storage.

          The app does not use third-party services that may collect information from you, such as analytics or advertising providers.

          All features and data (such as preferences or files) are stored locally on your device and are not transmitted to us or any other party.

        </p>
      </div>

      <form class="group-box overflow-hidden flex flex-col items-center text-center pt-5" action={'https://formspree.io/f/mnnvyqjo'} method='post'>
        <h2 class="text-xl font-semibold text-center" style={{ color: '#fff' }}>Contact Support</h2>

        <div class="flex flex-row" style={{ width: '90%', "justify-content": 'space-between', "margin-bottom": '5%', "margin-top": '5%' }}>
          <input
            name='Name'
            type="text"
            placeholder="Your Name"
            class="px-4 py-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ background: 'var(--header)', color: '#fff', width: '45%' }}
          />

          <input
            name='Email'
            type="email"
            placeholder="Your Email"
            class="px-4 py-2  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            style={{ background: 'var(--header)', color: '#fff', width: '45%' }}
          />
        </div>

        <textarea
          name='Message'
          placeholder="Your Message"
          rows="4"
          class="px-4 py-2  border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          style={{ background: 'var(--header)', color: '#fff', width: '90%' }}
        />

        <button
          type='submit'
          class="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          style={{ "margin-top": '5%' }}
        >
          Send Message
        </button>

        <p style={{ color: '#fff', "padding-top": '50px' }}> You can also contact me directly at <a href="mailto:tunevault.help@gmail.com" class='underline text-blue-600 hover:text-blue-700'>tunevault.help@gmail.com</a> </p>

        <p class="text-green-400 mt-3 hidden" data-formspree-success>
          Thanks! We’ll get back to you soon.
        </p>
      </form>
    </main>
  );
};

export default Home;
