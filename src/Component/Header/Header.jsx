const Header = () => {
  return (
    <div>
      <header className="bg-gray-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-white">HeroCodeMan</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
          <a href="#" className="text-white hover:text-gray-300">Services</a>
          <a href="#" className="text-white hover:text-gray-300">Contact</a>
        </div>
      </div>
    </header>
    <main>
    <div className="bg-gray-500 py-16 text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-semibold">Course Registration</h1>
        <p className="text-lg mt-4">Discover Your Career.</p>
      </div>
    </div>
    </main>
    </div>
  );
};

export default Header;
