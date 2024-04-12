
const Header = () => {
  return (
    <div>
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center text-2xl font-bold">
        <div className="p-4 font-bold uppercase">
          Contact Management App
          </div>
        <nav className="bg-blue-500 text-white p-4">
          {/* c
            <a href="#" className="">
                Home
                </a> 
            </li>
            <li >
              <a href="#" className="hover: ">
                Contacts list
                </a>
            </li>
            <a href="#" className="hover:text-gray-400 border-none">
            <li>Add Contact</li>
            </a>
          </ul> */}
          {
            <ul>
            <li>
       <a href="/Contactlist">
        Contact List
       </a>
       </li>
       </ul>
          }
        </nav>
      </div>
    </header>
    </div>
  )
}

export default Header