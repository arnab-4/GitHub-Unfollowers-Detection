export const Header = () => {
  return (
    <header className="Header bg-gradient-to-b from-blue-500 to-purple-500 text-white py-6 sm:py-8 md:py-10 rounded-2xl pt-5">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
            GitHub Unfollowers Detection
          </span>
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl opacity-80">
          Discover who's not following you back on GitHub!
        </p>
      </div>
    </header>
  );
};                                       
