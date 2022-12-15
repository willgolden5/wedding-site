const Navbar = () => {
  //navbar using twind
  return (
    <nav className='flex items-center justify-between flex-wrap border-gray-800 p-6 w-full'>
      <div className='flex items-center flex-shrink-0 text-white '>
        <span className='font-semibold text-xl text-gray-600 tracking-tight'>Will and Kate</span>
      </div>
      <div className='ml-auto w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm ml-auto pr-2'>
          <a
            className='block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4'
            href='#responsive-header'
          >
            Home
          </a>
          <a
            className='block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white mr-4'
            href='#responsive-header'
          >
            RSVP
          </a>
          <a className='block mt-4 lg:inline-block lg:mt-0 text-gray-100 hover:text-white' href='#responsive-header'>
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
