export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">GitHub Unfollowers Detection</h3>
          <p className="text-sm">Stay connected with us on GitHub</p>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <a
            href="https://github.com/arnab-4"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-500 transition flex items-center"
          >
            <svg
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-6 h-6 mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16 0C7.16 0 0 7.16 0 16c0 7.07 4.583 13.07 10.945 15.163.8.148 1.092-.347 1.092-.77 0-.38-.014-1.645-.022-2.987-4.454.968-5.55-2.163-5.55-2.163-.747-1.892-1.823-2.394-1.823-2.394-1.49-1.02.113-1.002.113-1.002 1.648.116 2.51 1.687 2.51 1.687 1.46 2.495 3.822 1.778 4.758 1.358.148-1.052.568-1.779 1.03-2.193-3.6-.408-7.394-1.8-7.394-8.005 0-1.773.633-3.22 1.678-4.36-.167-.41-.728-2.06.16-4.3 0 0 1.363-.436 4.46 1.667 1.29-.357 2.673-.536 4.04-.54 1.363.004 2.74.183 4.04.54 3.092-2.104 4.454-1.667 4.454-1.667.888 2.24.327 3.89.16 4.3 1.048 1.14 1.675 2.587 1.675 4.36 0 6.216-3.8 7.594-7.408 7.992.583.500 1.085 1.487 1.085 2.99 0 2.162-.02 3.907-.02 4.437 0 .428.288.922 1.1.766C27.42 29.07 32 23.07 32 16 32 7.16 24.84 0 16 0"
              ></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-gray-600 text-center mt-4 pt-4 text-xs">
        Design and Build by Arnab Manna
      </div>
    </footer>
  );
};
